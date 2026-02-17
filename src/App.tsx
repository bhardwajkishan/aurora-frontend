import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import BackgroundVideo from "./components/BackgroundVideo";
import HoverBlur from "./components/HoverBlur";
import GlassCard from "./components/GlassCard";

import WelcomeStep from "./components/StepContainer/WelcomeStep";
import PermissionStep from "./components/StepContainer/PermissionStep";
import LoginStep from "./components/StepContainer/LoginStep";
import ReadyStep from "./components/StepContainer/ReadyStep";

export default function App() {
  const [hovered, setHovered] = useState(false);
  const [step, setStep] = useState(0);

  // ✅ NEW MANUAL PROGRESS STATE
  const [progress, setProgress] = useState(0);

  const totalSteps = 4;

  const goNext = () => {
    if (step < totalSteps - 1) {
      const nextStep = step + 1;
      setStep(nextStep);

      // ✅ MANUAL CONTROL (you decide values)
      if (nextStep === 1) setProgress(33);
      if (nextStep === 2) setProgress(66);
      if (nextStep === 3) setProgress(100);
    }
  };

  const goBack = () => {
    if (step > 0) {
      const prevStep = step - 1;
      setStep(prevStep);

      // ✅ MANUAL CONTROL BACKWARDS
      if (prevStep === 0) setProgress(0);
      if (prevStep === 1) setProgress(33);
      if (prevStep === 2) setProgress(66);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">

      {/* Background */}
      <BackgroundVideo />
      <HoverBlur active={hovered} />

      <GlassCard
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <div className="relative w-[420px] overflow-hidden">

          {/* 🔥 Progress Bar */}
          {step > 0 && (
            <div className="absolute top-0 left-0 w-full h-[3px] bg-white/20 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-white/60"
              />
            </div>
          )}

          {/* 🔙 Back Button */}
          {step > 0 && (
            <button
              onClick={goBack}
              className="absolute left-4 top-6 text-white/70 hover:text-white transition z-20"
            >
              ←
            </button>
          )}

          {/* 🚀 Slide Container */}
          <div className="relative h-[420px] flex items-center justify-center">

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full"
              >
                {step === 0 && <WelcomeStep onNext={goNext} />}
                {step === 1 && <PermissionStep onNext={goNext} />}
                {step === 2 && (
                  <LoginStep onNext={goNext} onBack={goBack} />
                )}
                {step === 3 && <ReadyStep />}
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </GlassCard>
    </div>
  );
}
