import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export default function GlassCard({
  children,
  onHoverStart,
  onHoverEnd,
}: Props) {
  // Raw motion values
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Smooth spring animation (THIS removes flicker)
  const smoothRotateX = useSpring(rotateX, {
    stiffness: 120,
    damping: 18,
    mass: 0.8,
  });

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 120,
    damping: 18,
    mass: 0.8,
  });

  const glowX = useTransform(smoothRotateY, [-10, 10], ["40%", "60%"]);
  const glowY = useTransform(smoothRotateX, [-10, 10], ["40%", "60%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateYValue = ((x - rect.width / 2) / rect.width) * 8;
    const rotateXValue = -((y - rect.height / 2) / rect.height) * 8;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  }

  function resetRotation() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div
      className="relative"
      style={{ perspective: 1400 }}
      onMouseEnter={onHoverStart}
      onMouseLeave={() => {
        resetRotation();
        onHoverEnd?.();
      }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className="
          relative
          w-[500px]
          p-12
          rounded-3xl
          overflow-hidden
          backdrop-blur-[28px]
          backdrop-saturate-[180%]
          bg-white/[0.08]
          border border-white/30
          shadow-[0_30px_80px_rgba(0,0,0,0.35)]
        "
      >
        {/* Edge highlight */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.35), rgba(255,255,255,0.05) 45%, transparent 65%)",
          }}
        />

        {/* Moving glow */}
        <motion.div
          style={{
            background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(255,255,255,0.35), transparent 60%)`,
          }}
          className="absolute inset-0 rounded-3xl pointer-events-none"
        />

        <div className="relative z-10">{children}</div>
      </motion.div>
    </div>
  );
}
