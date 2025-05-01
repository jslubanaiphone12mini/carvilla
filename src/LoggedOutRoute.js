// PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";



const LoggedOutRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return !isLoggedIn ? children : <Navigate to="/" replace />;
};

export default LoggedOutRoute;
