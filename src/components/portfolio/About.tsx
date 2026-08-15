import {
  Blocks,
  Bot,
  ExternalLink,
  GraduationCap,
  LineChart,
  Plug,
  Quote,
  RefreshCw,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { education, experience, mindset, profile } from "@/data/portfolioData";

const focusIcons: Record<string, LucideIcon> = {
  Zap,
  Blocks,
  RefreshCw,
  Plug,
  Bot,
  LineChart,
};

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 -z-10 size-[34rem] -translate-x-1/2 rounded-full opacity-20 blur-[140px]"
        style={{ background: "var(--gradient-neon)" }}
      />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Profile"
            title="About"
            accent="me"
            description={profile.summary}
          />
        </Reveal>

        {/* Engineering mindset card + Focus list grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-12 items-stretch">
          {/* Left Column: Mindset Overview Card */}
          <Reveal className="lg:col-span-7 flex">
            <div className="glass relative flex flex-col justify-between h-full w-full overflow-hidden rounded-3xl p-8 text-card-foreground shadow-soft sm:p-10 border border-border/60">
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px opacity-70"
                style={{ background: "var(--gradient-neon)" }}
              />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                  {profile.name} · {profile.role}
                </p>
                <h3 className="mt-4 text-balance text-2xl font-bold sm:text-3xl">
                  Engineering <span className="text-gradient">Mindset</span>
                </h3>
                <p className="mt-4 text-pretty text-base sm:text-lg leading-relaxed">{mindset.intro}</p>
                {mindset.paragraphs.map((p) => (
                  <p key={p} className="mt-3 text-pretty text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>

              <figure className="mt-6 rounded-2xl border border-primary/25 bg-primary/[0.06] p-4 sm:p-5">
                <Quote className="size-4 text-primary" />
                <blockquote className="mt-2 text-pretty text-xs sm:text-sm italic leading-relaxed text-card-foreground/90">
                  {mindset.quote}
                </blockquote>
              </figure>
            </div>
          </Reveal>

          {/* Right Column: Perfectly distributed Focus Grid */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            {mindset.focus.map((f, i) => {
              const Icon = focusIcons[f.icon] ?? Zap;
              return (
                <Reveal key={f.text} delay={i * 60} className="flex-1 flex">
                  <div className="card-hover group relative flex items-center overflow-hidden rounded-2xl border border-border/80 bg-surface/40 px-5 py-4 backdrop-blur transition-all duration-300 hover:border-primary/50 hover:bg-surface/80 hover:shadow-lg hover:shadow-primary/5 w-full">
                    <div className="absolute -right-12 -top-12 size-24 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/15" />
                    
                    <div className="flex items-center gap-4 w-full">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                        <Icon className="size-4" />
                      </span>
                      <p className="text-xs sm:text-sm font-medium leading-snug text-muted-foreground group-hover:text-card-foreground transition-colors">
                        {f.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Experience + education */}
        <div className="mt-6 grid gap-5 lg:grid-cols-3 items-stretch">
          {experience.map((e, i) => (
            <Reveal key={e.role + e.org} delay={i * 90} className="flex">
              <div className="card-hover flex flex-col justify-between h-full w-full rounded-3xl border border-border bg-surface/50 p-7 text-card-foreground backdrop-blur">
                <div>
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-semibold">{e.role}</h3>
                      <p className="truncate text-sm text-muted-foreground">{e.org}</p>
                    </div>
                    <span className="inline-flex shrink-0 items-center rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary">
                      {e.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
                        <span className="min-w-0">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {e.link ? (
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary transition-transform duration-300 hover:translate-x-0.5"
                  >
                    Live demo <ExternalLink className="size-3.5" />
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}

          <Reveal delay={180} className="flex">
            <div className="card-hover flex flex-col justify-between h-full w-full rounded-3xl border border-border bg-surface/50 p-7 text-card-foreground backdrop-blur">
              <div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="size-5 shrink-0 text-primary" />
                  <h3 className="min-w-0 text-lg font-semibold">Education</h3>
                </div>
                <p className="mt-4 text-sm font-medium">{education.degree}</p>
                <p className="text-sm text-muted-foreground">
                  {education.school} · {education.period}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {education.notes.map((n) => (
                    <li key={n} className="text-sm text-muted-foreground">
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="my-4 h-px w-full bg-border" />
                <p className="font-mono text-xs text-muted-foreground">{education.languages}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}