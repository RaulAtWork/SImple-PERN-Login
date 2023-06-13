import React from "react";
import Login from "./routes/Login";
import Home from "./routes/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" Component={Login} exact></Route>
      <Route
        exact
        path="/home"
        element={
          <ProtectedRoute isAuthenticated={true} redirect="/login">
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
