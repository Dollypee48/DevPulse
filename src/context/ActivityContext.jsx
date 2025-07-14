// src/context/ActivityContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { loadActivitiesFromStorage, saveActivitiesToStorage } from "../utils/localStorage";

const ActivityContext = createContext();

export function ActivityProvider({ children }) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const stored = loadActivitiesFromStorage();
    if (stored) setActivities(stored);
  }, []);

  useEffect(() => {
    saveActivitiesToStorage(activities);
  }, [activities]);

  const addActivity = (activity) => {
    setActivities((prev) => [activity, ...prev]);
  };

  const updateActivity = (updated) => {
    setActivities((prev) =>
      prev.map((a) => (a.id === updated.id ? updated : a))
    );
  };

  const deleteActivity = (id) => {
    setActivities((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <ActivityContext.Provider
      value={{ activities, addActivity, updateActivity, deleteActivity }}
    >
      {children}
    </ActivityContext.Provider>
  );
}

export const useActivity = () => useContext(ActivityContext);
