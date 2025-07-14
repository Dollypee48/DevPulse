import { useState } from "react";
import { useActivity } from "../context/ActivityContext";
import { motion } from "framer-motion";
import { FiCalendar, FiTrash2, FiEdit, FiSave, FiX } from "react-icons/fi";

export default function ActivityList() {
  const { activities, updateActivity, deleteActivity } = useActivity();
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", notes: "", tags: "", date: "" });

  const startEdit = (activity) => {
    setEditingId(activity.id);
    setEditForm({
      title: activity.title,
      notes: activity.notes,
      tags: activity.tags.join(", "),
      date: activity.date,
    });
  };

  const handleSave = (id) => {
    updateActivity({
      id,
      ...editForm,
      tags: editForm.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
    });
    setEditingId(null);
  };

  if (activities.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500 text-md italic">
          No activities logged yet. Start building your dev history!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {activities.map((activity) => (
        <motion.div
          key={activity.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm rounded-lg p-5"
        >
          {editingId === activity.id ? (
            <div>
              <input
                className="w-full mb-2 px-3 py-2 rounded text-sm bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
                value={editForm.title}
                onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
              />
              <textarea
                className="w-full mb-2 px-3 py-2 rounded text-sm bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
                rows={3}
                value={editForm.notes}
                onChange={(e) => setEditForm({ ...editForm, notes: e.target.value })}
              />
              <input
                className="w-full mb-2 px-3 py-2 rounded text-sm bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
                value={editForm.tags}
                onChange={(e) => setEditForm({ ...editForm, tags: e.target.value })}
              />
              <input
                type="date"
                className="w-full mb-3 px-3 py-2 rounded text-sm bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
                value={editForm.date}
                onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
              />
              <div className="flex gap-2">
                <button
                  onClick={() => handleSave(activity.id)}
                  className="bg-green-600 text-white text-sm px-3 py-1 rounded hover:bg-green-700"
                >
                  <FiSave className="inline mr-1" /> Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="bg-gray-400 text-white text-sm px-3 py-1 rounded hover:bg-gray-500"
                >
                  <FiX className="inline mr-1" /> Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-purple-700">{activity.title}</h3>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <FiCalendar className="mr-1" />
                  {formatDate(activity.date)}
                </div>
              </div>

              {/* Notes */}
              {activity.notes && (
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 leading-relaxed whitespace-pre-line">
                  {activity.notes}
                </p>
              )}

              {/* Tags */}
              {activity.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {activity.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100 text-xs font-mono font-medium px-2.5 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3 mt-4 text-sm">
                <button
                  onClick={() => startEdit(activity)}
                  className="text-yellow-600 hover:underline"
                >
                  <FiEdit className="inline mr-1" />
                  Edit
                </button>
                <button
                  onClick={() => deleteActivity(activity.id)}
                  className="text-red-600 hover:underline"
                >
                  <FiTrash2 className="inline mr-1" />
                  Delete
                </button>
              </div>
            </>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function formatDate(dateStr) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateStr).toLocaleDateString(undefined, options);
}
