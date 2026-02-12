import GlassCard from "../components/GlassCard"

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <GlassCard>
        <h1 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center">
          Aurora
        </h1>

        <div className="space-y-6">
          <input
            type="email"
            placeholder="Faculty Email"
            className="
              w-full
              px-5
              py-4
              rounded-2xl
              bg-transparent
              border border-white/30
              text-white
              placeholder-white/50
              focus:outline-none
              focus:border-white/70
              transition-all duration-200
            "
          />

          <input
            type="password"
            placeholder="Password"
            className="
              w-full
              px-5
              py-4
              rounded-2xl
              bg-transparent
              border border-white/30
              text-white
              placeholder-white/50
              focus:outline-none
              focus:border-white/70
              transition-all duration-200
            "
          />

          <button
            className="
              w-full
              py-4
              rounded-2xl
              bg-transparent
              border border-white/40
              text-white
              font-medium
              hover:bg-white/10
              active:scale-[0.97]
              transition-all duration-200
            "
          >
            Sign In
          </button>
        </div>
      </GlassCard>
    </div>
  )
}
