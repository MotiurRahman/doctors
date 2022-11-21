import React, { useContext } from "react";
import { useRouteError } from "react-router-dom";
import { AuthUserContext } from "../../../AuthContext/AuthContext";

const DisplayError = () => {
  const error = useRouteError();
  const { logout } = useContext(AuthUserContext);
  const handleSignout = () => {
    logout();
  };
  return (
    <div>
      <p>Someting went wrong!!!</p>
      <p className="text-red-400">{error.statusTest || error.message}</p>
      <h4 className="text-3xl">
        Please{" "}
        <button className="btn btn-primary" onClick={handleSignout}>
          Logout
        </button>{" "}
        and log back in
      </h4>
    </div>
  );
};

export default DisplayError;
