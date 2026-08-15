import { ArrowUpRight, Download, Zap, Sparkles } from "lucide-react";
import { socials } from "@/utils/shared";
import heroAsset from "@/assets/heroimg.avif";
import { profile } from "@/data/portfolioData";

const CV_URL =
  "https://drive.google.com/uc?export=download&id=1FcKaw5BN0ccKu_dDR6GztWPU8sm8BC1o";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-20 pt-24 sm:pt-32">
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 -z-10 size-[28rem] rounded-full opacity-15 blur-[120px]"
        style={{ background: "var(--gradient-neon)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/2 -z-10 size-[32rem] rounded-full opacity-15 blur-[140px]"
        style={{ background: "var(--gradient-neon)" }}
      />

      <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-2">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-8">

          {/* Content Section (7 columns) */}
          <div className="animate-rise min-w-0 lg:col-span-7">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-primary backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Available for work 
            </span>
            <h1 className="mt-6 text-balance text-5xl font-extrabold tracking-tight leading-[1.05] sm:text-6xl md:text-7xl">
              Frontend
              <br />
              <span className="text-gradient">Developer</span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
              I'm <span className="text-card-foreground font-semibold">{profile.name}</span> — crafting intuitive web applications with Angular and React, including real-time systems, backed by clean, scalable architecture and Node.js-powered backends.
            </p>
            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={CV_URL}
                download="Fatma_Gamal_Frontend_CV.pdf"
                className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-[image:var(--gradient-neon)] px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-neon"
              >
                <Download className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                Download CV
              </a>

              <a
                href="#projects"
                className="group inline-flex h-12 items-center gap-2 rounded-full border border-border/80 bg-surface/40 px-7 text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-surface/80"
              >
                Explore Projects
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid size-11 place-items-center rounded-full border border-border/80 bg-surface/50 text-muted-foreground backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary hover:shadow-neon"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>

            {/* Core Metrics */}
            {/* <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border/50 pt-8">
              {[
                { k: "6+", v: "Shipped projects" },
                { k: "95%", v: "Lighthouse score" },
                { k: "2", v: "Frameworks mastered" },
              ].map((s) => (
                <div key={s.v} className="min-w-0">
                  <dt className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl> */}
          </div>

          {/* Image & Widgets Section */}
          <div className="animate-rise relative flex items-center justify-center lg:col-span-5 [animation-delay:150ms] lg:mt-20">

            <div className="absolute size-[21rem] sm:size-[26rem] rounded-full border border-primary/20 bg-primary/5 blur-[2px] animate-pulse" />
            <div className="absolute size-[23rem] sm:size-[28rem] rounded-full border border-dashed border-primary/30" />

            <div className="glass relative size-[19rem] sm:size-[23rem] rounded-full p-3 shadow-2xl backdrop-blur-xl">
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-primary/40 shadow-inner">
                <img
                  src={heroAsset}
                  alt="Developer workspace with neon-lit multi-monitor setup"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-primary/20 mix-blend-color" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Widget 1: Real-time systems */}
            <div className="glass animate-float absolute bottom-2 left-0 sm:-left-2 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl backdrop-blur-md border border-border/80">
              <span className="grid size-9 place-items-center rounded-xl bg-primary/15 text-primary">
                <Zap className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-xs sm:text-sm font-semibold">Real-time systems</p>
                <p className="truncate text-[11px] text-muted-foreground">WebSocket · IoT · HLS.js</p>
              </div>
            </div>

            {/* Floating Widget 2: Location Badge */}
            <div className="glass animate-float absolute right-0 top-0 sm:-right-2 rounded-2xl px-4 py-3 shadow-xl backdrop-blur-md border border-border/80 [animation-delay:1s]">
              <div className="flex items-center gap-2.5">
                <span className="grid size-8 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Sparkles className="size-3.5" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Based in</p>
                  <p className="font-display text-xs sm:text-sm font-semibold">{profile.location}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}