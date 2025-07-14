// src/components/StatsChart.jsx
import { Bar } from "react-chartjs-2";
import { useActivity } from "../context/ActivityContext";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Register chart elements
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

export default function StatsChart() {
  const { activities } = useActivity();

  // Count how many times each tag appears
  const tagCounts = activities
    .flatMap((a) => a.tags)
    .reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {});

  const hasData = Object.keys(tagCounts).length > 0;

  const data = {
    labels: Object.keys(tagCounts),
    datasets: [
      {
        label: "Tag Frequency",
        data: Object.values(tagCounts),
        backgroundColor: "rgba(168, 85, 247, 0.6)",
        borderColor: "rgba(147, 51, 234, 1)",
        borderWidth: 1,
        borderRadius: 8,
        barThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#4B5563", // gray-700
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#f9fafb",
        titleColor: "#111827",
        bodyColor: "#4B5563",
        borderColor: "#D1D5DB",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#6B7280", // gray-500
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "#6B7280",
          stepSize: 1,
        },
        grid: {
          color: "#E5E7EB", // gray-200
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 mt-8 rounded-xl shadow border border-gray-100">
      <h2 className="text-xl font-bold text-purple-700 mb-5 tracking-tight">
        📊 Tag Usage Overview
      </h2>

      {hasData ? (
        <div className="h-64">
          <Bar data={data} options={options} />
        </div>
      ) : (
        <p className="text-gray-500 text-sm italic">No chart data available yet. Start logging activities with tags!</p>
      )}
    </div>
  );
}
