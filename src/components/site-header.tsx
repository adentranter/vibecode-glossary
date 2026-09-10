"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

function BrickMark({ className }: Readonly<{ className?: string }>) {
  return (
    <span
      aria-hidden
      className={cn("grid size-7 grid-cols-2 gap-0.5", className)}
    >
      <span className="rounded-[3px] bg-primary" />
      <span className="rounded-[3px] bg-primary/45" />
      <span className="rounded-[3px] bg-primary/70" />
      <span className="rounded-[3px] bg-primary/25" />
    </span>
  );
}

const links = [
  { href: "/", label: "Home" },
  { href: "/glossary", label: "Glossary" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight"
        >
          <BrickMark />
          Vibe Code 101
        </Link>
        <nav className="flex items-center gap-1">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm transition-colors",
                  active
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export { BrickMark };
