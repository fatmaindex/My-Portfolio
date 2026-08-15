import type { FormEvent } from "react";
import { Mail, MapPin, Phone, Send, User } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { socials } from "@/utils/shared";
import { profile } from "@/data/portfolioData";

export function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(String(data.get("subject") ?? "Portfolio enquiry"));
    const body = encodeURIComponent(
      `${String(data.get("message") ?? "")}\n\n— ${String(data.get("name") ?? "")} (${String(data.get("email") ?? "")})`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your mail app…");
    form.reset();
  };

  return (
    <section id="contact" className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Get in touch"
            title="Contact"
            accent="me"
            description="Open to frontend and full-stack roles, and freelance collaborations."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="glass rounded-3xl p-8 text-card-foreground shadow-soft">
              <form onSubmit={onSubmit} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="name" required placeholder="Name" className="h-12 w-full rounded-xl border border-border bg-surface-2/50 px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary/60" />
                  <input name="email" type="email" required placeholder="Email" className="h-12 w-full rounded-xl border border-border bg-surface-2/50 px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary/60" />
                </div>
                <input name="subject" placeholder="Subject" className="h-12 w-full rounded-xl border border-border bg-surface-2/50 px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary/60" />
                <textarea name="message" required rows={6} placeholder="Your message" className="w-full rounded-xl border border-border bg-surface-2/50 p-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary/60" />
                <button
                  type="submit"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-neon)] text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.01] hover:shadow-neon"
                >
                  <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  Send message
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card-hover flex h-full flex-col justify-between rounded-3xl border border-border bg-surface/50 p-8 text-card-foreground backdrop-blur">
              <div className="space-y-5">
                {[
                  { icon: User, label: profile.name },
                  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
                  {
                    icon: Phone,
                    label: profile.phone,
                    href: `tel:${profile.phone.replace(/\s/g, "")}`,
                  },
                  { icon: MapPin, label: profile.location },
                ].map((c) => (
                  <div key={c.label} className="flex min-w-0 items-center gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                      <c.icon className="size-4" />
                    </span>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="min-w-0 truncate text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {c.label}
                      </a>
                    ) : (
                      <span className="min-w-0 truncate text-sm text-muted-foreground">
                        {c.label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid size-10 place-items-center rounded-full border border-border bg-surface-2/60 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
                  >
                    <s.icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}