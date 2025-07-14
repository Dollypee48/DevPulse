
import ActivityForm from "../components/ActivityForm";
import ActivityList from "../components/ActivityList";
import StatsChart from "../components/StatsChart";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <ActivityForm />
        <ActivityList />
        <StatsChart />
      </div>
    </div>
  );
}
