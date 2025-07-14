// src/pages/Dashboard.jsx
import ActivityList from "../components/ActivityList";
import StatsChart from "../components/StatsChart";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-purple-700 tracking-tight">
          👨‍💻 DevPulse Dashboard
        </h1>
        <Link
          to="/log"
          className="bg-purple-700 text-white px-5 py-2 rounded-lg text-sm shadow hover:bg-purple-800 transition"
        >
          + Log Activity
        </Link>
      </div>

      <ActivityList />
      <StatsChart />
    </div>
  );
}
