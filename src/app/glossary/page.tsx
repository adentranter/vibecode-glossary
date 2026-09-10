import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Lightbulb } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HashScroll } from "@/components/hash-scroll";
import { categories } from "@/lib/glossary-data";

export const metadata: Metadata = {
  title: "Glossary — Vibe Code 101",
  description: "The full terminology glossary, grouped by domain.",
};

export default function GlossaryPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
      <HashScroll />
      <Button asChild variant="ghost" size="sm" className="mb-6 -ml-3">
        <Link href="/">
          <ArrowLeft />
          Back
        </Link>
      </Button>

      <div className="max-w-2xl">
        <h1 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
          The glossary
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          Every term, grouped by domain, in the order they showed up building
          Aden&apos;s Mowing. Jump to a group, or just scroll.
        </p>
      </div>

      <nav className="sticky top-14 z-30 -mx-6 mt-8 border-y border-border/80 bg-background/80 px-6 py-3 backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Jump
          </span>
          {categories.map((category) => (
            <Button
              key={category.slug}
              asChild
              variant="outline"
              size="sm"
              className="min-w-8 bg-card px-2.5"
            >
              <a href={`#${category.slug}`} title={category.title}>
                {category.layer}
              </a>
            </Button>
          ))}
        </div>
      </nav>

      <div className="mt-14 space-y-20">
        {categories.map((category) => (
          <section
            key={category.slug}
            id={category.slug}
            className="scroll-mt-32"
          >
            <div className="mb-8 flex items-start justify-between gap-8">
              <div className="max-w-2xl">
                <Badge variant="secondary" className="mb-3">
                  Layer {category.layer}
                </Badge>
                <h2 className="font-serif text-3xl font-medium tracking-tight text-balance">
                  {category.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-primary">
                  {category.tagline}
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
                  {category.blurb}
                </p>
              </div>
              <span
                aria-hidden
                className="hidden select-none font-serif text-7xl font-medium leading-none text-primary/15 sm:block"
              >
                {String(category.layer).padStart(2, "0")}
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {category.terms.map((term) => (
                <Card key={term.term} className="h-full shadow-none">
                  <CardHeader>
                    <CardTitle className="font-serif text-lg font-medium">
                      {term.term}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {term.definition}
                    </p>
                    {term.note ? (
                      <div className="flex gap-2.5 rounded-lg border border-primary/10 bg-secondary/70 p-3 text-xs text-secondary-foreground">
                        <Lightbulb className="mt-0.5 size-3.5 shrink-0 text-primary" />
                        <span className="leading-relaxed">{term.note}</span>
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-20 max-w-xl font-serif text-xl font-medium leading-snug text-foreground/80">
        That&apos;s the full block set. Everything else is just combining
        these in different orders.
      </p>
    </div>
  );
}
