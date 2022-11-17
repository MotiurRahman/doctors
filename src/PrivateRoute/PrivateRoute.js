import userEvent from "@testing-library/user-event";
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthUserContext } from "../AuthContext/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthUserContext);
  const location = useLocation();

  if (loader) {
    return <button className="btn loading m-auto">loading</button>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
