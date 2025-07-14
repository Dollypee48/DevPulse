
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-700 tracking-tight">
          DevPulse
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-purple-700 font-medium">
            Home
          </Link>
          <Link to="/dashboard" className="text-gray-600 hover:text-purple-700 font-medium">
            Dashboard
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-purple-700 font-medium">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
