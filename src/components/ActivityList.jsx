
import { useActivity } from "../context/ActivityContext";

export default function ActivityList() {
  const { activities } = useActivity();

  if (activities.length === 0) {
    return <p className="text-gray-600 text-center">No activities logged yet.</p>;
  }

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-lg font-semibold text-purple-700">{activity.title}</h3>
            <span className="text-sm text-gray-500">{activity.date}</span>
          </div>
          <p className="text-gray-700 text-sm mb-2">{activity.notes}</p>
          <div className="flex flex-wrap gap-2">
            {activity.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
