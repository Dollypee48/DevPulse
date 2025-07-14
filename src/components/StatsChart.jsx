
import { Bar } from "react-chartjs-2";
import { useActivity } from "../context/ActivityContext";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

export default function StatsChart() {
  const { activities } = useActivity();

  const tagCounts = activities.flatMap((a) => a.tags).reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(tagCounts),
    datasets: [
      {
        label: "Activities by Tag",
        data: Object.values(tagCounts),
        backgroundColor: "rgba(168, 85, 247, 0.6)",
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-purple-700 mb-4">Your Progress</h2>
      {Object.keys(tagCounts).length === 0 ? (
        <p className="text-gray-500 text-sm">No data to display.</p>
      ) : (
        <Bar data={data} />
      )}
    </div>
  );
}
