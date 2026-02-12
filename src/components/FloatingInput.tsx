import { useState } from "react"

interface Props {
  label: string
  type?: string
}

export default function FloatingInput({ label, type = "text" }: Props) {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState("")

  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => setValue(e.target.value)}
        placeholder=" "
        className="
        w-full
        py-3
        rounded-2xl
        bg-white/[0.05]
        backdrop-blur-sm
        border border-white/30
        text-white
        font-medium
        hover:bg-white/[0.1]
        active:scale-[0.97]
        transition-all duration-200
        "
      />

      <label
        className={`
          absolute left-4 transition-all duration-200
          ${
            focused || value
                ? "top-2 text-xs text-white/80"
                : "top-4 text-white/50"

          }
        `}
      >
        {label}
      </label>
    </div>
  )
}
