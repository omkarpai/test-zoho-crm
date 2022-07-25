import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Grant from "./pages/grant/Grant";
import Home from "./pages/home/Home";

function App() {


  
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/grant" element={<Grant />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
