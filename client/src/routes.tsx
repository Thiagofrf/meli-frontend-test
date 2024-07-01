import React from 'react';
import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home.tsx";
import Search from "./pages/Search.tsx";
import Product from "./pages/Product.tsx";

const routes = () => {
    return (
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Search />} path="/items?search=:query" />
            <Route element={<Product />} path="/items/:id" />
        </Routes>
    )
}

export default routes