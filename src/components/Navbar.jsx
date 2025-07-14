
import { Link, useLocation } from "react-router-dom";


export default function Navbar() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-purple-700 dark:text-purple-400 font-semibold underline underline-offset-4"
      : "text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition duration-200";

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm py-4 px-6 sticky top-0 z-20 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-purple-700 dark:text-purple-400 tracking-tight hover:opacity-90 transition"
        >
          DevPulse
        </Link>

        <div className="flex items-center gap-6 text-sm sm:text-base font-medium">
          <Link to="/" className={isActive("/")}>Home</Link>
          <Link to="/dashboard" className={isActive("/dashboard")}>Dashboard</Link>
          <Link to="/log" className={isActive("/log")}>Log</Link>
          <Link to="/about" className={isActive("/about")}>About</Link>
          
        </div>
      </div>
    </nav>
  );
}
