
const STORAGE_KEY = "devpulse_activities";

export const loadActivitiesFromStorage = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error("Failed to load activities:", err);
    return [];
  }
};

export const saveActivitiesToStorage = (activities) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(activities));
  } catch (err) {
    console.error("Failed to save activities:", err);
  }
};
