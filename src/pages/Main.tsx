import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Coins } from "../containers/Coins";
import { One } from "../containers/One";

export const Main = (): JSX.Element => (
    <BrowserRouter>
        <React.Fragment>
            <Routes>
                <Route path="/" element={<One />} />
                <Route path="/:coinId/*" element={<Coins />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>
);



