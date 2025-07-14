
import { useState } from "react";
import { useActivity } from "../context/ActivityContext";
import { v4 as uuidv4 } from "uuid";

export default function ActivityForm() {
  const { addActivity } = useActivity();

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
      tags: formData.tags.split(",").map(tag => tag.trim()).filter(Boolean),
    };

    addActivity(newActivity);
    setFormData({ title: "", tags: "", notes: "", date: new Date().toISOString().split("T")[0] });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4 text-purple-700">Add Daily Activity</h2>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Title</label>
        <input
          type="text"
          name="title"
          required
          value={formData.title}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Tags (comma-separated)</label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="e.g. React, Git, TypeScript"
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Notes</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows="3"
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <button
        type="submit"
        className="bg-purple-700 text-white px-5 py-2 rounded hover:bg-purple-800 transition"
      >
        Save Activity
      </button>
    </form>
  );
}
