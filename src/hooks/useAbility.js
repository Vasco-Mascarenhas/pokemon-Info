import { QueryClient, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const fetchAbility = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    return new Error("Not a valid ability name");
  }

  return response.json();
};

export function useAbility(selectedAbility) {
  const queryKey = ["Ability", selectedAbility];
  const queryClient = new QueryClient();
  useEffect(() => {
    queryClient.invalidateQueries(queryKey);
  }, [queryKey]);

  return useQuery(queryKey, async () => {
    const apiUrl = selectedAbility
      ? `https://pokeapi.co/api/v2/ability/${selectedAbility}`
      : `https://pokeapi.co/api/v2/ability/1`;

    const ability = await fetchAbility(apiUrl);
    const additionalData = await Promise.all(
      ability.pokemon.map(async (poke) => {
        const pokemonData = await fetchAbility(poke.pokemon.url);
        return pokemonData;
      })
    );

    // Merge the additional data with the original ability data
    const mergedData = {
      ...ability,
      pokemon: additionalData,
    };

    return mergedData;
  });
}
