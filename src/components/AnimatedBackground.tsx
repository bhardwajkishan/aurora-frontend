import { motion } from "framer-motion"

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute w-[700px] h-[700px] bg-blue-300/40 rounded-full blur-3xl"
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -120, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 120, 0],
          y: [0, 200, -100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
