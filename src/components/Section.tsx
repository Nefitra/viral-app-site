import { useEffect, useRef, useState, type ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""} mb-12 sm:mb-16`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gradient-gold mb-4`}>
          <span className="w-1 h-1 rounded-full bg-[#FFD36A]" />
          {eyebrow}
          <span className="w-1 h-1 rounded-full bg-[#FFD36A]" />
        </div>
      )}
      <h2 className="section-title display-font text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#A9A3B8] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
