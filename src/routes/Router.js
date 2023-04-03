import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pastas/Home/Home";
import { Pokedex } from "../pastas/Pokedex/Pokedex";
import { Detalhes } from "../pastas/Detalhes/Detalhes";
import { ErroPage } from "../pastas/ErroPage";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/detalhes/:namePokemon" element={<Detalhes />} />
        <Route path="*" element={<ErroPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

