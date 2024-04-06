import React from "react";

//Paginas de controle de Rotas
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes: React.FC = () => {
  const isAuthenticated = false;

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
};

export { Routes };
