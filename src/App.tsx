import { motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/aurora-bg.mp4" type="video/mp4" />
      </video>

      {/* 🌫️ Hover Blur Layer (only active when hovering card) */}
      <div
        className={`absolute inset-0 pointer-events-none transition duration-500 ${
          hovered ? "backdrop-blur-sm" : ""
        }`}
      />

      {/* 💎 Glass Login Card */}
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 backdrop-blur-3xl bg-white/25 border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.2)] rounded-3xl p-12 w-[400px]"
      >
        <h1 className="text-3xl font-semibold text-center mb-10 text-gray-800">
          Aurora
        </h1>

        <div className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-5 py-3 rounded-xl bg-white/40 backdrop-blur-md border border-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-5 py-3 rounded-xl bg-white/40 backdrop-blur-md border border-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow-xl"
          >
            Sign In
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
