
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScissorStonePaper from "./pages/ScissorStonePaper.tsx";
import ScissorStonePaperSimple from "./pages/ScissorStonePaperSimple.tsx";
import { Navbar } from "./components/Navbar";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<ScissorStonePaper />} />
                <Route path="/game" element={<ScissorStonePaperSimple />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
