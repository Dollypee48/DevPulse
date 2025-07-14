import ActivityForm from "../components/ActivityForm";

export default function LogActivityPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-4 py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          ✍️ Log a New Developer Activity
        </h1>
        <ActivityForm />
      </div>
    </div>
  );
}
