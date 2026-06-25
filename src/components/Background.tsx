export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[#05020D]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#180A2E]/40 via-transparent to-[#05020D]" />

      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Radial glows */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full radial-glow opacity-70 animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full radial-glow opacity-50 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full opacity-40" style={{ background: "radial-gradient(circle, rgba(255,211,106,0.15) 0%, transparent 60%)" }} />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${(i * 37) % 100}%`,
              bottom: `-10px`,
              background: i % 3 === 0 ? "#FFD36A" : "#B066FF",
              boxShadow: i % 3 === 0 ? "0 0 8px #FFD36A" : "0 0 8px #B066FF",
              animation: `particle ${15 + (i % 8) * 2}s linear infinite`,
              animationDelay: `${(i * 1.3) % 12}s`,
            }}
          />
        ))}
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{
        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      }} />
    </div>
  );
}
