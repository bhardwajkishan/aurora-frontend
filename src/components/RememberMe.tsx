import { useState } from "react";

export default function RememberMe() {
  const [checked, setChecked] = useState(false);

  return (
    <div
      className="flex items-center gap-3 cursor-pointer select-none"
      onClick={() => setChecked(!checked)}
    >
      {/* Custom Checkbox */}
      <div
        className={`w-6 h-6 rounded-md flex items-center justify-center border transition-all duration-300
          ${checked
            ? "bg-purple-500 border-purple-500"
            : "bg-white/30 border-white/40 backdrop-blur-md"}
        `}
      >
        {/* Pencil-style SVG tick */}
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4"
        >
          <path
            d="M4 12L9 17L20 6"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 30,
              strokeDashoffset: checked ? 0 : 30,
              transition: "stroke-dashoffset 0.4s ease",
            }}
          />
        </svg>
      </div>

      <span className="text-sm text-gray-700">
        Remember Me
      </span>
    </div>
  );
}
