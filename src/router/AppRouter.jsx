import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/router/AuthRoutes";
import { MarketRoutes } from "../market/router/MarketRoutes";
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<MarketRoutes />} />
    </Routes>
  );
};
