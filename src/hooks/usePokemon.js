import { useQuery } from "@tanstack/react-query";
const fetchPokemon = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network error idk");
  }

  return response.json();
};

const fetchSpeciesAndTypes = async (pokemon) => {
  const [speciesResponse, typesResponses] = await Promise.all([
    fetch(pokemon.species.url),
    Promise.all(pokemon.types.map((type) => fetch(type.type.url))),
  ]);

  if (!speciesResponse.ok || typesResponses.some((response) => !response.ok)) {
    throw new Error("Network error when fetching species or type data");
  }

  const speciesData = await speciesResponse.json();
  const typesData = await Promise.all(
    typesResponses.map((response) => response.json())
  );

  const evolutionChainResponse = await fetch(speciesData.evolution_chain.url);
  if (!evolutionChainResponse.ok) {
    throw new Error("Network error when fetching evolution chain data");
  }

  const evolutionChainData = await evolutionChainResponse.json();

  return { speciesData, typesData, evolutionChainData };
};

export function usePokemon(pokemonName) {
  return useQuery(
    ["pokemon", pokemonName],
    async () => {
      if (pokemonName != null) {
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

        const pokemonData = await fetchPokemon(apiUrl);

        const { speciesData, typesData } = await fetchSpeciesAndTypes(
          pokemonData
        );

        // Fetch evolution chain data after speciesData promise is resolved
        const evolutionChainResponse = await fetch(
          speciesData.evolution_chain.url
        );

        if (!evolutionChainResponse.ok) {
          throw new Error("Network error when fetching evolution chain data");
        }

        const evolutionChainData = await evolutionChainResponse.json();

        return { ...pokemonData, speciesData, typesData, evolutionChainData };
      } else {
        return {};
      }
    },
    {
      staleTime: Infinity,
    }
  );
}
