import './App.css';
import { Route, Routes } from "react-router-dom"

import Header from './components/Header/Header.tsx';
import Home from "./pages/Home/Home.tsx";
import Search from "./pages/Search/Search.tsx";
import Product from "./pages/Product/Product.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Search />} path="/items" />
          <Route element={<Product />} path="/items/:id" />
      </Routes>
        
    </>
  );
}

export default App;
