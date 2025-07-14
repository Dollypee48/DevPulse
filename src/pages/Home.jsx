
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Welcome to <span className="text-purple-700">DevPulse</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Track what you build, fix, and learn every day as a developer.
          Stay consistent, grow your skills, and visualize your journey.
        </p>
        <Link
          to="/dashboard"
          className="inline-block px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg shadow hover:bg-purple-800 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
