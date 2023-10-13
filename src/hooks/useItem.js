import { useQuery, QueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const queryClient = new QueryClient();

const fetchITem = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network Error");
  }
  return response.json();
};

export function useItem(item) {
  const queryKey = ["Item", item];

  useEffect(
    () => {
      queryClient.invalidateQueries(queryKey);
    },
    queryKey,
    item
  );

  const apiUrl = `https://pokeapi.co/api/v2/item/${item}`;

  return useQuery(queryKey, async () => {
    if (item) {
      const item = await fetchITem(apiUrl);
      return item;
    } else {
      return null;
    }
  });
}
