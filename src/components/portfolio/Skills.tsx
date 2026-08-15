import { Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { skillIcons } from "@/utils/shared";
import { skillGroups } from "@/data/portfolioData";

export function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="Toolkit" title="Professional" accent="skillset" />
        </Reveal>
        <div className="mt-14 grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => {
            const Icon = skillIcons[g.icon] ?? Sparkles;
            return (
              <Reveal key={g.label} delay={i * 70} className="h-full">
                <div className="card-hover group h-full rounded-3xl border border-border bg-surface/50 p-7 text-card-foreground backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon className="size-5" />
                    </span>
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                      {g.label}
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-xl border border-border bg-surface-2/60 px-3 py-1.5 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
