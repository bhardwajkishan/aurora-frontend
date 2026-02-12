export default function VideoBackground() {
  return (
    <div className="absolute inset-0 bg-black/5">
      <video
        className="w-full h-full object-cover"
        src="/white-geometric-waves.3840x2160.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Cinematic dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/15" />
    </div>
  )
}
