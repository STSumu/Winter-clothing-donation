import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logofinal.png";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [bg, setbg] = useState("");
  const location = useLocation();
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast("User successfully logged out.");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const paths = ["/auth", "/auth/login", "/auth/register"];
  console.log(location.pathname);
  useEffect(() => {
    const handleScroll = () => {
      const scrollStatus = window.scrollY > 500;

      if (paths.includes(location.pathname) || scrollStatus) {
        setbg("bg-[#254E70]");
      } else {
        setbg("bg-transparent");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/campaign">Donation Campaigns</NavLink>
      </li>
      <li>
        <NavLink to="/help">How to Help</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div
      className={`navbar px-5 md:px-16 text-white shadow-sm fixed z-10 ${bg}`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-1 bg-[#254E70]/30 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img className="w-20" src={logo} alt="" />
        <a className="text-lg hidden md:flex">
          Winter <br></br> Clothing Donation
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user && user.email ? (
          <div className="flex gap-2 items-center justify-center">
            {user.photoURL ? (
              <img
                className="object-cover rounded-full w-10 h-10 border border-white"
                src={user.photoURL}
                alt="User"
              />
            ) : (
              <FaUserCircle className="w-10 h-10" />
            )}
            <button
              className="btn text-white shadow-none border-0 bg-[#d9542c]"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
        ) : (
          <Link
            className="btn text-white shadow-none border-0 bg-[#d9542c]"
            to="/auth/login"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
