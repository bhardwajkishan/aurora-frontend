import { motion } from "framer-motion";
import CometCard from "../ui/CometCard";
import GoogleButton from "../GoogleButton";
import PESUButton from "../PESUButton";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function LoginStep({ onNext, onBack }: Props) {
  return (
    <div className="w-full flex items-center justify-center relative">


      {/* INNER GLASS SLAB (Smaller) */}
      <CometCard className="w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            relative
            w-[360px]
            py-14
            px-10
            rounded-3xl
            backdrop-blur-[40px]
            backdrop-saturate-[200%]
            bg-white/[0.12]
            border border-white/40
            shadow-none
            flex flex-col items-center
          "
        >
          {/* Soft highlight */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-transparent opacity-25 pointer-events-none" />

          <h2 className="text-2xl font-semibold text-white text-center mb-10 tracking-wide">
            Sign in to Aurora
          </h2>

          <div className="w-full space-y-6">
            <GoogleButton
              onClick={() => {
                alert("Google OAuth will connect later");
                onNext();
              }}
            />

            <PESUButton
              onClick={() => {
                alert("PESU SSO will connect later");
                onNext();
              }}
            />
          </div>
        </motion.div>
      </CometCard>

    </div>
  );
}
