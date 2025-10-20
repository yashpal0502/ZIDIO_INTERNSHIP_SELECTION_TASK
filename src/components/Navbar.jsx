import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const user = {
    name: "Yashpal",
  };
  const navigate = useNavigate();

  const logoutUser = () => {};

  return (
    <div className="backdrop-blur-xl bg-white/60 border-b border-white/40 shadow-md sticky top-0 z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4 text-slate-800 transition-all">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={assets.image} alt="logo" className="h-12 w-auto" />
          <span className="font-bold text-lg text-indigo-600">HireMe</span>
        </Link>

        {/* User & Logout */}
        <div className="flex items-center gap-4 text-sm">
          <p className="max-sm:hidden text-slate-700 font-medium">
            Hi, {user?.name}
          </p>
          <button
            onClick={logoutUser}
            className="bg-white/70 hover:bg-white/90 border border-gray-300 backdrop-blur-md px-6 py-1.5 rounded-full shadow-sm hover:shadow-md active:scale-95 transition-all text-slate-800 font-medium"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
