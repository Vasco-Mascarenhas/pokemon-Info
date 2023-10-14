import { useQuery, QueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const queryClient = new QueryClient();

const fetchMoves = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network error");
  }

  return response.json();
};

export function useMoves(orderFrom, orderTo, searchedMove, typeSelected) {
  const queryKey = ["Moves", orderFrom, orderTo, searchedMove, typeSelected];

  useEffect(() => {
    queryClient.invalidateQueries(queryKey);
  }, [queryKey, orderFrom, orderTo, searchedMove, typeSelected]);

  return useQuery(queryKey, async () => {
    const apiUrl = searchedMove
      ? `https://pokeapi.co/api/v2/move/${searchedMove}`
      : typeSelected
      ? `https://pokeapi.co/api/v2/move/?offset=${orderFrom}&limit=1000`
      : `https://pokeapi.co/api/v2/move/?offset=${orderFrom}&limit=${
          orderTo - orderFrom
        }`;

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
