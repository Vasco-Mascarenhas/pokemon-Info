import { useQuery, QueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const queryClient = new QueryClient();

const fetchItemCategory = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network error");
  }

  return response.json();
};

export function useItemCategory() {
  const queryKey = ["ItemCategories"];

  useEffect(() => {
    queryClient.invalidateQueries();
  }, ["itemCategories"]);

  const apiUrl = "https://pokeapi.co/api/v2/item-category/?offset=0&limit=60";

  return useQuery(queryKey, async () => {
    const category = fetchItemCategory(apiUrl);
    return category;
  });
}
