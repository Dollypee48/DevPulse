// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-purple-700 font-semibold underline underline-offset-4"
      : "text-gray-600 hover:text-purple-700 transition duration-200";

  return (
    <nav className="bg-white shadow-sm py-4 px-6 sticky top-0 z-20 border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-purple-700 tracking-tight hover:opacity-90 transition"
        >
          DevPulse
        </Link>

        {/* Navigation links */}
        <div className="space-x-5 sm:space-x-8 text-sm sm:text-base font-medium">
          <Link to="/" className={isActive("/")}>
            Home
          </Link>
          <Link to="/dashboard" className={isActive("/dashboard")}>
            Dashboard
          </Link>
          <Link to="/log" className={isActive("/log")}>
            Log
          </Link>
          <Link to="/about" className={isActive("/about")}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
