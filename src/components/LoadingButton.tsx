import { motion } from "framer-motion";

interface Props {
  loading: boolean;
  onClick: () => void;
}

export default function LoadingButton({ loading, onClick }: Props) {
  return (
    <motion.button
      whileHover={!loading ? { scale: 1.05 } : {}}
      whileTap={!loading ? { scale: 0.97 } : {}}
      onClick={onClick}
      disabled={loading}
      className={`w-full py-3 rounded-xl text-white font-semibold shadow-xl transition flex items-center justify-center gap-2 ${
        loading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-gradient-to-r from-purple-500 to-indigo-500"
      }`}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
      )}
      {loading ? "Signing in..." : "Sign In"}
    </motion.button>
  );
}
