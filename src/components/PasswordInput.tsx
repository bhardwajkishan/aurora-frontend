import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className="w-full px-5 py-3 rounded-xl bg-white/40 backdrop-blur-md border border-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition pr-12"
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-purple-500 transition"
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
}
