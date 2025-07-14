import { useState } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useActivity } from "../context/ActivityContext";

export default function ActivityForm() {
  const { addActivity } = useActivity();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    tags: "",
    notes: "",
    date: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newActivity = {
      id: uuidv4(),
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
    };

    addActivity(newActivity);

    setFormData({
      title: "",
      tags: "",
      notes: "",
      date: new Date().toISOString().split("T")[0],
    });

    navigate("/dashboard");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-400 px-6 py-8 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 mb-10"
    >
      {/* <h2 className="text-2xl font-bold text-purple-700 mb-6 tracking-tight">
        ✍️ Log a New Activity
      </h2> */}

      {/* Title */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
          Activity Title
        </label>
        <input
          type="text"
          name="title"
          required
          value={formData.title}
          onChange={handleChange}
          placeholder="What did you work on?"
          className="w-full border rounded-lg px-4 py-2 text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Tags */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
          Tags <span className="text-gray-400">(comma-separated)</span>
        </label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="e.g. React, Git, TypeScript"
          className="w-full border rounded-lg px-4 py-2 font-mono text-sm text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Notes */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
          Notes
        </label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="What did you learn, debug, or complete?"
          rows="4"
          className="w-full border rounded-lg px-4 py-2 text-sm text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
      </div>

      {/* Date */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
          Date
        </label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="bg-purple-700 text-white px-6 py-2 rounded-lg font-medium shadow hover:bg-purple-800 transition"
      >
        ➕ Save Activity
      </motion.button>
    </motion.form>
  );
}
