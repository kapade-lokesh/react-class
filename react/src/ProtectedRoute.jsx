import React, { Children } from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoute = ({ children }) => {
  const { login } = useSelector((state) => state.user);
  return (
    <div>{login ? <Route element={children} /> : <Navigate to="/login" />}</div>
  );
};

export default ProtectedRoute;
