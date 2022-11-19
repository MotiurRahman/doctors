import userEvent from "@testing-library/user-event";
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthUserContext } from "../../AuthContext/AuthContext";
import useAdmin from "../../hooks/useAdmin";

const AdminRoutes = ({ children }) => {
  const { user, loader } = useContext(AuthUserContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loader || isAdminLoading) {
    return <button className="btn loading m-auto">loading</button>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
