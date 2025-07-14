import ActivityForm from "../components/ActivityForm";

export default function LogActivityPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">
        ✍️ Log a New Developer Activity
      </h1>
      <ActivityForm />
    </div>
  );
}