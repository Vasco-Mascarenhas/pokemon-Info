import { useQuery, QueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const queryClient = new QueryClient();
const fetchItems = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network error");
  }

  return response.json();
};

export function useItems(orderFrom, orderTo, searchedItem, selectedCategory) {
  const queryKey = [
    "Items",
    searchedItem,
    orderFrom,
    orderTo,
    selectedCategory,
  ];

  useEffect(() => {
    queryClient.invalidateQueries(queryKey);
  }, [queryKey, searchedItem, orderTo, orderFrom]);

  return useQuery(queryKey, async () => {
    const apiUrl = searchedItem
      ? `https://pokeapi.co/api/v2/item/${searchedItem}`
      : selectedCategory
      ? `https://pokeapi.co/api/v2/item-category/${selectedCategory}`
      : `https://pokeapi.co/api/v2/item/?offset=${orderFrom}&limit=${
          orderTo - orderFrom
        }`;

    const items = await fetchItems(apiUrl);

    if (searchedItem) {
      return items;
    } else if (selectedCategory) {
      const additionalData = await Promise.all(
        items.items.map(async (item) => {
          const itemData = await fetchItems(item.url);
          return itemData;
        })
      );
      return additionalData;
    } else {
      const additionalData = await Promise.all(
        items.results.map(async (item) => {
          const itemData = await fetchItems(item.url);
          return itemData;
        })
      );
      return additionalData;
    }
  });
}
