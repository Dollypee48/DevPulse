
import { createContext, useContext, useEffect, useState } from "react";
import { loadActivitiesFromStorage, saveActivitiesToStorage } from "../utils/localStorage";


const ActivityContext = createContext();

// Provider component
export function ActivityProvider({ children }) {
  const [activities, setActivities] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = loadActivitiesFromStorage();
    if (stored) setActivities(stored);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    saveActivitiesToStorage(activities);
  }, [activities]);

  const addActivity = (activity) => {
    setActivities((prev) => [activity, ...prev]);
  };

  return (
    <ActivityContext.Provider value={{ activities, addActivity }}>
      {children}
    </ActivityContext.Provider>
  );
}

// Custom hook to use the context
export const useActivity = () => useContext(ActivityContext);
