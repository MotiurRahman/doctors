import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthUserContext } from "../../../AuthContext/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthUserContext);

  const handleLogin = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/appointment">Appointment</Link>
        <Link to="/dashboard">dashboard</Link>
        <Link to="/contact-us">Contact Us</Link>
        {user?.uid ? (
          <>
            <Link onClick={handleLogin}>Logout</Link>
            <Link>Hi, {user.displayName}</Link>
            {user?.photoURL && (
              <Link>
                <div className="avatar">
                  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} alt="" />
                  </div>
                </div>
              </Link>
            )}
          </>
        ) : (
          <Link to="login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ml-auto"
          >
            {menuItem}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">
          Doctors Portal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
      <div className="navbar-end">
        <label
          htmlFor="dashboard-drawer"
          tabIndex={3}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
