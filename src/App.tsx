import { useState } from "react";
import PESUButton from "./components/PESUButton";
import GoogleButton from "./components/GoogleButton";
import RememberMe from "./components/RememberMe";
import BackgroundVideo from "./components/BackgroundVideo";
import HoverBlur from "./components/HoverBlur";
import GlassCard from "./components/GlassCard";
import PasswordInput from "./components/PasswordInput";
import LoadingButton from "./components/LoadingButton";

export default function App() {
  const [hovered, setHovered] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Login API will be connected later");
    }, 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">

      {/* 🎥 Background Video */}
      <BackgroundVideo />

      {/* 🌫 Hover Blur Layer */}
      <HoverBlur active={hovered} />

      {/* 💎 Glass Card */}
      <GlassCard
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <h1 className="text-3xl font-semibold text-center mb-10 text-gray-800">
          Aurora
        </h1>

        <div className="space-y-6">

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-5 py-3 rounded-xl bg-white/40 backdrop-blur-md border border-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />

          {/* Password Input with Toggle */}
          <PasswordInput />

          {/* Remember Me + Forgot Password */}
          <div className="flex justify-between items-center">
            <RememberMe />

            <span className="text-sm text-purple-600 hover:underline cursor-pointer">
              Forgot Password?
            </span>
          </div>

          {/* Loading Button */}
          <LoadingButton
            loading={loading}
            onClick={handleLogin}
          />

          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-white/40" />
            <span className="text-xs text-gray-600">OR</span>
            <div className="flex-1 h-px bg-white/40" />
          </div>

          <GoogleButton onClick={() => alert("Google OAuth will connect later")} />

          <PESUButton onClick={() => alert("PESU SSO will connect later")} />
            




        </div>
      </GlassCard>
    </div>
  );
}
