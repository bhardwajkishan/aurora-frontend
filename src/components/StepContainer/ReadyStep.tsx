import { motion } from "framer-motion";

export default function ReadyStep() {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center px-6">

      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-white mb-8"
      >
        You’re All Set.
      </motion.h2>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium hover:bg-white/30 transition"
      >
        Enter Dashboard
      </motion.button>

    </div>
  );
}
