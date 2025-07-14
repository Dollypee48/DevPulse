import { useRef } from "react";
import { Link } from "react-router-dom";
import ActivityList from "../components/ActivityList";
import StatsChart from "../components/StatsChart";
import { useActivity } from "../context/ActivityContext";
import { downloadDashboardPDF } from "../utils/pdfExport";

export default function Dashboard() {
  const { activities } = useActivity();
  const chartRef = useRef(null);

  const handleDownloadPDF = () => {
    downloadDashboardPDF(chartRef, activities);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex flex-wrap gap-4 justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-purple-700 tracking-tight">
          👨‍💻 DevPulse Dashboard
        </h1>
        <div className="flex gap-3">
          <Link
            to="/log"
            className="bg-purple-700 text-white px-5 py-2 rounded-lg text-sm shadow hover:bg-purple-800 transition"
          >
            + Log Activity
          </Link>
          <button
            onClick={handleDownloadPDF}
            className="bg-gray-100 text-gray-700 border px-4 py-2 rounded hover:bg-gray-200 transition text-sm"
          >
            📥 Download as PDF
          </button>
        </div>
      </div>

      <ActivityList />
      <StatsChart chartRef={chartRef} />
    </div>
  );
}
