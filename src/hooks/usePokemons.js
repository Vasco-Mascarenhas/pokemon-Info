import { useQuery, QueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
const fetchPokemon = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network error idk");
  }

  return response.json();
};

export function useAllPokemon(orderFrom, orderTo, searchPokemon, typeSelected) {
  const queryKey = ["pokemon", orderFrom, orderTo, searchPokemon, typeSelected];
  const queryClient = new QueryClient();

  //invalidating previous queries with same query key
  //ex: changing the input value from the orderFrom,Orderto
  //this way it wont finish the previous queries making it so we dont fetch useless data and gain performance
  useEffect(() => {
    queryClient.invalidateQueries(queryKey);
  }, [queryKey, orderFrom, orderTo]);

  return useQuery(
    queryKey,
    async () => {
      const apiUrl = searchPokemon
        ? `https://pokeapi.co/api/v2/pokemon/${searchPokemon}`
        : typeSelected
        ? `https://pokeapi.co/api/v2/type/${typeSelected}`
        : `https://pokeapi.co/api/v2/pokemon/?offset=${orderFrom}&limit=${
            orderTo - orderFrom
          }`;

      const pokemon = await fetchPokemon(apiUrl);

      if (searchPokemon) {
        return pokemon;
      } else if (typeSelected) {
        const additionalData = await Promise.all(
          pokemon.pokemon.map(async (result) => {
            const pokemonData = await fetchPokemon(result.pokemon.url);
            return pokemonData;
          })
        );
        return additionalData;
      } else {
        const additionalData = await Promise.all(
          pokemon.results.map(async (result) => {
            const pokemonData = await fetchPokemon(result.url);
            return pokemonData;
          })
        );

        return additionalData;
      }
    },
    {
      staleTime: Infinity,
    }
  );
}
