import { createContext, useContext, useState } from "react";

const selectedItemContext = createContext();

export function SelectedItemProvider({ children }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <selectedItemContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </selectedItemContext.Provider>
  );
}

export function useItemContext() {
  return useContext(selectedItemContext);
}
