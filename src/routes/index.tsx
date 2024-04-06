import React from "react";

//Paginas de controle de Rotas
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { useAuth } from "../contexts/authContext";

const Routes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
};

export { Routes };
