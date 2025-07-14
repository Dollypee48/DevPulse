
export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-700 mb-6">About DevPulse</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          DevPulse is a developer growth tracker built with React. It allows you to log daily coding
          activities, track your progress, and visualize the skills you are developing over time.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          The app uses localStorage to persist your data, so no sign-up is required. It's designed to help
          developers stay consistent, reflect on their progress, and build momentum.
        </p>
      </div>
    </div>
  );
}
