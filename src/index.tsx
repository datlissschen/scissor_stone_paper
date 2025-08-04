
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.tsx"
import ScissorStonePaperSpock from "./pages/ScissorStonePaperSpock.tsx";
import ScissorStonePaperSimple from "./pages/ScissorStonePaperSimple.tsx";
import { Navbar } from "./components/Navbar";

import "./index.css";
import Game from "./pages/Game.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path = "/SSPComplex" element={<ScissorStonePaperSpock />} />
                <Route path="/game" element={<Game/>} />
                <Route path="/SSP" element={<ScissorStonePaperSimple />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
