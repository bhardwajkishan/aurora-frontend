import { motion } from "framer-motion";

interface Props {
  onNext: () => void;
}

export default function PermissionStep({ onNext }: Props) {
  return (
    <div className="w-full h-full flex items-center justify-center px-10">

      <div className="w-full max-w-[360px] flex flex-col items-center gap-8">

        <h2 className="text-2xl font-semibold text-white text-center">
          Aurora Needs Access To
        </h2>

        <div className="flex flex-col gap-4 text-white/80 text-sm">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            ✔ Google Calendar
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            ✔ Gmail
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            ✔ Google Meet
          </motion.div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={onNext}
          className="w-full py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium"
        >
          Allow & Continue
        </motion.button>

      </div>
    </div>
  );
}
