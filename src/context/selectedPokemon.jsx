import { createContext, useContext, useState } from "react";

const selectedPokemonContext = createContext();

export function SelectedPokemonProvider({ children }) {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <selectedPokemonContext.Provider
      value={{ selectedPokemon, setSelectedPokemon }}
    >
      {children}
    </selectedPokemonContext.Provider>
  );
}

export function usePokemonContext() {
  return useContext(selectedPokemonContext);
}
