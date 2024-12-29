import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false); // Update the authentication state after logout
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <Home logout={logout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/home" : "/login"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
