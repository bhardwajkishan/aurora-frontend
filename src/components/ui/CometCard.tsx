import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  rotateDepth?: number;
  translateDepth?: number;
  className?: string;
}

export default function CometCard({
  children,
  rotateDepth = 15,
  translateDepth = 20,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // Raw mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring motion
  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 18,
    mass: 0.6,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 18,
    mass: 0.6,
  });

  // Rotation
  const rotateX = useTransform(
    smoothY,
    [-0.5, 0.5],
    [`-${rotateDepth}deg`, `${rotateDepth}deg`]
  );

  const rotateY = useTransform(
    smoothX,
    [-0.5, 0.5],
    [`${rotateDepth}deg`, `-${rotateDepth}deg`]
  );

  // Subtle depth translate (luxury feel)
  const translateX = useTransform(
    smoothX,
    [-0.5, 0.5],
    [`-${translateDepth}px`, `${translateDepth}px`]
  );

  const translateY = useTransform(
    smoothY,
    [-0.5, 0.5],
    [`${translateDepth}px`, `-${translateDepth}px`]
  );

  // Glare tracking
  const glareX = useTransform(smoothX, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(smoothY, [-0.5, 0.5], [0, 100]);

  const glareBackground = useMotionTemplate`
    radial-gradient(
      circle at ${glareX}% ${glareY}%,
      rgba(255,255,255,0.55),
      rgba(255,255,255,0.25) 25%,
      transparent 60%
    )
  `;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPct = x / rect.width - 0.5;
    const yPct = y / rect.height - 0.5;

    mouseX.set(xPct);
    mouseY.set(yPct);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      className={`relative ${className}`}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          translateX,
          translateY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className="relative rounded-3xl"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2 }}
      >
        {children}

        {/* Glare Layer */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2x1"
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.35), transparent 60%)`,
          }}
        />
      </motion.div>
    </div>
  );
}
