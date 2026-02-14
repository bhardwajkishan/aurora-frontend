import { motion } from "framer-motion";
    import type { ReactNode } from "react";

    interface Props {
    children: ReactNode;
    onHoverStart: () => void;
    onHoverEnd: () => void;
    }

    export default function GlassCard({
    children,
    onHoverStart,
    onHoverEnd,
    }: Props) {
    return (
        <motion.div
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 backdrop-blur-3xl bg-white/25 border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.2)] rounded-3xl p-12 w-[400px]"
        >
        {children}
        </motion.div>
    );
    }
