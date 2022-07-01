import { Routes, Route, Navigate } from "react-router-dom";
import { MarketPage } from "../pages";

export const MarketRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MarketPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
