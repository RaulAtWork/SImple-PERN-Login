import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ isAuthenticated, redirect, children }) {
  return isAuthenticated ? children : <Navigate to={redirect} />;
}

export default ProtectedRoute;
