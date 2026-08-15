import { Code2, Layers, Zap } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { services } from '@/data/portfolioData';

const serviceIcons = [Layers, Code2, Zap];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-2">
        <Reveal>
          <SectionHeading
            eyebrow="What I do"
            title=" "
            accent="Services"
            description="Building systems that scale — and interfaces that impress"
          />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[i] ?? Layers;
            return (
              <Reveal key={s.title} delay={i * 90}>
                <div className="card-hover group relative h-full overflow-hidden rounded-3xl border border-border bg-surface/50 p-7 text-card-foreground backdrop-blur">
                  <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="grid size-12 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-primary">
                    {s.tag}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}