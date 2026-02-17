import { motion } from "framer-motion";

interface Props {
  onClick?: () => void;
}

export default function GoogleButton({ onClick }: Props) {
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
      {/* Soft Glass Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-red-500/10 to-yellow-500/10 opacity-0 hover:opacity-100 transition duration-500" />

      {/* Google Logo */}
      <svg width="18" height="18" viewBox="0 0 48 48">
        <path
          fill="#EA4335"
          d="M24 9.5c3.54 0 6.7 1.23 9.2 3.64l6.84-6.84C35.93 2.63 30.39 0 24 0 14.62 0 6.46 5.48 2.44 13.48l7.97 6.19C12.43 13.41 17.73 9.5 24 9.5z"
        />
        <path
          fill="#4285F4"
          d="M46.14 24.57c0-1.64-.15-3.21-.43-4.73H24v9.05h12.41c-.54 2.91-2.18 5.37-4.63 7.02l7.18 5.58c4.21-3.88 6.63-9.6 6.63-16.92z"
        />
        <path
          fill="#FBBC05"
          d="M10.41 28.63c-.5-1.45-.8-2.99-.8-4.63s.3-3.18.8-4.63l-7.97-6.19C.89 16.37 0 20.08 0 24s.89 7.63 2.44 10.82l7.97-6.19z"
        />
        <path
          fill="#34A853"
          d="M24 48c6.39 0 11.93-2.11 15.9-5.73l-7.18-5.58c-2 1.35-4.56 2.14-8.72 2.14-6.27 0-11.57-3.91-13.59-9.17l-7.97 6.19C6.46 42.52 14.62 48 24 48z"
        />
      </svg>

      <span className="text-sm font-medium text-gray-800">
        Sign in with Google
      </span>
    </motion.button>
  );
}
