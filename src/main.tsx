import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";

import { ContentPage } from "./pages";
import { DashboardLayout, MainLayout } from "./components/layout";
import { DashboardIndex } from "./pages/Dashboard/Index/DashboardIndex";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* catch all */}
          <Route path="*" Component={ContentPage} />

          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index path="/dashboard/" Component={DashboardIndex}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
