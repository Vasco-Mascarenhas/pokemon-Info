import React, { useState } from "react";
import {
  DataContainer,
  ItemContainer,
  ItemData,
  OrderBy,
  SearchBar,
} from "../../components";
import { useItemCategory } from "../../hooks/useItemCategory";
import { useItems } from "../../hooks/useItems";
const Items = () => {
  const [fromValue, setFromValue] = useState(0);
  const [searchedItem, setSearchedItem] = useState(null);
  const [toValue, setToValue] = useState(20);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const {
    data: itemCategories,
    error: itemCategoryError,
    isLoading: itemCategoryLoading,
  } = useItemCategory();
  const { data, error, isLoading } = useItems(
    fromValue,
    toValue,
    searchedItem,
    selectedCategory
  );

  const handleFromValueChange = (value) => {
    setFromValue(value);
    setSearchedItem(null);
  };

  const handleToValueChange = (value) => {
    setToValue(value);
  };

  const handleClearClick = () => {
    setSearchedItem(null);
    setFromValue(0);
    setToValue(20);
    setSelectedCategory("");
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value.value);
  };

  const itemOptions = [{ value: "", label: "None" }];
  if (itemCategories?.results) {
    itemCategories.results.map((res) => {
      itemOptions.push({ value: res.name, label: res.name.replace(/-/g, " ") });
    });
  }
  return (
    <>
      <div className="info-container">
        <div className="ordering">
          <SearchBar
            placeholder="Search an item by name or id!"
            search={(val) => setSearchedItem(val.replace(" ", "-"))}
          />
          <OrderBy
            onTypeChange={handleCategoryChange}
            options={itemOptions}
            fromValue={fromValue}
            toValue={toValue}
            onFromValueChange={handleFromValueChange}
            onToValueChange={handleToValueChange}
            onClearClick={handleClearClick}
          />
        </div>
        <ItemContainer
          error={error}
          item={data}
          searchedItem={searchedItem}
          loading={isLoading}
        />
      </div>
      <DataContainer>
        <ItemData />
      </DataContainer>
    </>
  );
};

export default Items;
