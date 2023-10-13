import "./App.css";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SelectedPokemonProvider } from "./context/selectedPokemon";
import { SelectedAbilityProvider } from "./context/selectedAbility";
import { Home, Pokedex, Ability } from "./pages";
import { SelectedItemProvider } from "./context/selectedItem";
import Items from "./pages/items/Items";
import Moves from "./pages/moves/Moves";
import { SelectedMoveProvider } from "./context/selectedMove";
function App() {
  return (
    <BrowserRouter>
      <SelectedMoveProvider>
        <SelectedItemProvider>
          <SelectedAbilityProvider>
            <SelectedPokemonProvider>
              <Layout>
                <Routes>
                  <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="pokedex" element={<Pokedex />} />
                    <Route path="Ability" element={<Ability />} />
                    <Route path="Items" element={<Items />} />
                    <Route path="Moves" element={<Moves />} />
                  </Route>
                </Routes>
              </Layout>
            </SelectedPokemonProvider>
          </SelectedAbilityProvider>
        </SelectedItemProvider>
      </SelectedMoveProvider>
    </BrowserRouter>
  );
}

export default App;
