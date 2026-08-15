import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        shown ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-[2px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
        <span className="size-1.5 rounded-full bg-primary" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-balance text-3xl font-bold sm:text-4xl md:text-5xl">
        {title} {accent ? <span className="text-gradient">{accent}</span> : null}
      </h2>
      {description ? (
        // <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
        //   {description}
        // </p>
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
  {description}
</p>
      ) : null}
    </div>
  );
}
