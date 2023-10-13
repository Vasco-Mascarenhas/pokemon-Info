import { useQuery, QueryClient, Query } from "@tanstack/react-query";
import { useEffect } from "react";

const queryClient = new QueryClient();

const fetchMoves = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network error");
  }

  return response.json();
};

export function useMoves(searchedMove) {
  const queryKey = ["Moves", searchedMove];

  return useQuery(queryKey, async () => {
    const apiUrl = searchedMove
      ? `https://pokeapi.co/api/v2/move/${searchedMove}`
      : "https://pokeapi.co/api/v2/move/";

    const moves = await fetchMoves(apiUrl);

    if (searchedMove) {
      return moves;
    } else {
      const additionalData = await Promise.all(
        moves.results.map(async (result) => {
          const moveData = await fetchMoves(result.url);
          return moveData;
        })
      );
      return additionalData;
    }
  });
}
