import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";

import { HomePage } from "./pages";
import { MainLayout } from "./components/layout/MainLayout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" Component={HomePage} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
