import React from "react";
import Login from "./routes/Login";
import Home from "./routes/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./routes/Register";
import { UserContext } from "./components/UserContext";

function App() {
  const user = React.useContext(UserContext);

  return (
    <Routes>
      <Route path="/login" Component={Login} exact />
      <Route
        exact
        path="/home"
        element={
          <ProtectedRoute
            isAuthenticated={user.authenticated}
            redirect="/login"
          >
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/register" Component={Register} exact />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
