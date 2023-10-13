import { createContext, useContext, useState } from "react";

const selectedMoveContext = createContext();

export function SelectedMoveProvider({ children }) {
  const [selectedMove, setSelectedMove] = useState(null);

  return (
    <selectedMoveContext.Provider value={{ selectedMove, setSelectedMove }}>
      {children}
    </selectedMoveContext.Provider>
  );
}

export function useMoveContext() {
  return useContext(selectedMoveContext);
}
