import { createContext, useContext, useState } from "react";

const selectedAbilityContext = createContext();

export function SelectedAbilityProvider({ children }) {
  const [selectedAbility, setSelectedAbility] = useState(null);

  return (
    <selectedAbilityContext.Provider
      value={{ selectedAbility, setSelectedAbility }}
    >
      {children}
    </selectedAbilityContext.Provider>
  );
}

export function useAbilityContext() {
  return useContext(selectedAbilityContext);
}
