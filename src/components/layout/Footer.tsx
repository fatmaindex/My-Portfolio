import { socials } from "@/utils/shared";
import { profile } from "@/data/portfolioData";

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <p className="min-w-0 truncate text-xs text-muted-foreground">
          Designed & developed by {profile.name} © {new Date().getFullYear()}
        </p>
        <div className="flex shrink-0 items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <s.icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
