import { motion } from "framer-motion";

export default function Login() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">

      {/* Background Glow 1 */}
      <div className="absolute w-[500px] h-[500px] bg-purple-300/40 rounded-full blur-3xl -top-20 -left-20"></div>

      {/* Background Glow 2 */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-300/40 rounded-full blur-3xl bottom-0 right-0"></div>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative bg-white/25 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-3xl p-10 w-[400px]"
      >
        {/* Glass Highlight Layer */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-transparent opacity-30 pointer-events-none"></div>

        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Aurora
        </h1>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-lg"
          >
            Sign In
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
