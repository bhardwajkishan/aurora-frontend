import { motion } from "framer-motion";

interface Props {
  onClick?: () => void;
}

export default function PESUButton({ onClick }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="
        w-full
        flex
        items-center
        justify-center
        gap-3
        py-3
        rounded-xl
        backdrop-blur-md
        bg-white/20
        border border-white/30
        shadow-lg
        hover:bg-white/30
        transition
        relative
        overflow-hidden
      "
    >
      {/* Subtle purple glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition duration-500" />

      {/* Graduation Cap Icon */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-purple-600"
      >
        <path d="M22 10L12 4 2 10l10 6 10-6z" />
        <path d="M6 12v5c0 2 6 2 6 2s6 0 6-2v-5" />
      </svg>

      <span className="text-sm font-medium text-gray-800">
        Sign in with pesuacademy.com
      </span>
    </motion.button>
  );
}
