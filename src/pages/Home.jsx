
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../assets/devpulse-hero.png"; 

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* HERO SECTION */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Welcome to <span className="text-purple-700">DevPulse</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Track what you build, fix, and learn every day as a developer.
            Stay consistent, grow your skills, and visualize your journey.
          </p>
          <Link
            to="/dashboard"
            className="inline-block px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg shadow hover:bg-purple-800 transition"
          >
            Get Started
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <img src={heroImage} alt="Developer working" className="w-full max-w-md mx-auto rounded-3xl" />
        </motion.div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-10">Why Use DevPulse?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 border rounded-lg p-6 shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">📆 Daily Tracking</h3>
              <p className="text-gray-600 text-sm">Record what you learn, build, and fix every day with ease.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 border rounded-lg p-6 shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">📊 Visual Progress</h3>
              <p className="text-gray-600 text-sm">View your development journey in graphs and charts.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 border rounded-lg p-6 shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">🧠 Skill Tags</h3>
              <p className="text-gray-600 text-sm">Label entries with skills like React, Git, or TypeScript.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-purple-700 py-16 text-center text-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Start Logging Your Dev Growth Today</h2>
          <p className="mb-6">No login required. Data is stored locally. Stay consistent and grow!</p>
          <Link
            to="/dashboard"
            className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
          >
            Go to Dashboard
          </Link>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-gray-300 py-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} DevPulse. Built with 💻 using React + Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
