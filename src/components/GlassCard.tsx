import { motion } from "framer-motion"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function GlassCard({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="
        relative
        w-[520px]
        p-14
        rounded-[48px]
        backdrop-blur-md
        bg-transparent
        border border-white/25
        shadow-[0_80px_200px_rgba(0,0,0,0.2)]
      "
    >
      {children}
    </motion.div>
  )
}
