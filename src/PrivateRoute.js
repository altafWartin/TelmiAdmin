// src/components/PrivateRoute.js
import { Navigate } from "react-router-dom";

// PrivateRoute component to protect certain routes
const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem("token"); // Check if token exists

  return token ? element : <Navigate to="/login" />; // Redirect to login if not authenticated
};

export default PrivateRoute;
