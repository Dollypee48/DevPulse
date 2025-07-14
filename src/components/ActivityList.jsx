
import { useActivity } from "../context/ActivityContext";
import { motion } from "framer-motion";
import { FiCalendar } from "react-icons/fi";

export default function ActivityList() {
  const { activities } = useActivity();

  if (activities.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500 text-md italic">No activities logged yet. Start building your dev history!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {activities.map((activity, index) => (
        <motion.div
          key={activity.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="bg-white border border-gray-100 shadow-sm rounded-lg p-5"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-purple-700">{activity.title}</h3>
            <div className="flex items-center text-sm text-gray-500">
              <FiCalendar className="mr-1" />
              {formatDate(activity.date)}
            </div>
          </div>

          {/* Notes */}
          {activity.notes && (
            <p className="text-gray-700 text-sm mb-3 leading-relaxed whitespace-pre-line">
              {activity.notes}
            </p>
          )}

          {/* Tags */}
          {activity.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {activity.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-purple-100 text-purple-800 text-xs font-mono font-medium px-2.5 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

// Format YYYY-MM-DD to readable date
function formatDate(dateStr) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateStr).toLocaleDateString(undefined, options);
}
