export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-700 mb-4 tracking-tight">
          About <span className="text-gray-900 dark:text-gray-100">DevPulse</span>
        </h2>

        <p className="text-lg leading-relaxed mb-8">
          <strong>DevPulse</strong> is your personal developer growth companion — built with React and designed
          to help you track what you build, debug, and learn daily. No sign-up, no distractions — just you and your progress.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">🎯 Our Mission</h3>
            <p className="leading-relaxed text-sm">
              To help developers stay consistent, reflect on their work, and grow intentionally — one commit, one bug fix, and one learning moment at a time.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">🛠️ How It Works</h3>
            <ul className="list-disc list-inside text-sm leading-relaxed space-y-1">
              <li>Log what you worked on — code, fixes, learnings.</li>
              <li>Tag by skills or topics (e.g., React, Docker, Git).</li>
              <li>See visual charts of your developer journey.</li>
              <li>All stored locally — no accounts, no data loss.</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg border dark:border-gray-700 shadow p-6">
          <h4 className="text-lg font-semibold text-purple-700 mb-2">🚀 Built With:</h4>
          <ul className="text-sm leading-relaxed list-disc list-inside space-y-1">
            <li><strong>React.js</strong> – UI framework</li>
            <li><strong>Framer Motion</strong> – Smooth animations</li>
            <li><strong>Chart.js</strong> – Visual data tracking</li>
            <li><strong>Tailwind CSS</strong> – Clean, responsive styling</li>
            <li><strong>localStorage</strong> – Persist data with no backend</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
