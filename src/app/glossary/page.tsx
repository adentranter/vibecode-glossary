import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Lightbulb } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

      <aside
        id="why"
        className="mt-6 max-w-2xl scroll-mt-32 rounded-xl border border-primary/15 bg-secondary/50 p-4 sm:p-5"
      >
        <h2 className="font-serif text-lg font-medium tracking-tight">
          Why bother learning any of this?
        </h2>
        <div className="mt-2 space-y-2 text-sm leading-relaxed text-muted-foreground">
          <p>You don&apos;t have to. You can vibe code without it.</p>
          <p>
            But if you want to play with the new toys, you should know how to
            fix them — or at least where to look when something small goes
            wrong.
          </p>
          <p>
            When cars were new, knowing they got you from A to B was enough
            until they weren&apos;t. A dead battery and a blown fuse look the
            same if you&apos;ve never looked under the hood. Once you can
            fault-find, the mysterious breakdown is a five-minute fix.
            That&apos;s obvious now. It wasn&apos;t when cars were young.
          </p>
          <p>
            Vibe coding is in that same infancy. You don&apos;t need this
            glossary to drive. You need it to know whether the problem is the
            battery or the fuse. That&apos;s a large part of what separates the
            good vibe coders from the ones waiting for someone else to look
            under the hood.
          </p>
        </div>
      </aside>

      <nav className="sticky top-14 z-30 -mx-6 mt-6 border-y border-border/80 bg-background/80 px-6 py-2.5 backdrop-blur-md">
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

      <div className="mt-8 space-y-8">
        {categories.map((category) => (
          <section
            key={category.slug}
            id={category.slug}
            className="scroll-mt-32"
          >
            <div className="mb-3 max-w-2xl">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <Badge variant="secondary">Layer {category.layer}</Badge>
                <h2 className="font-serif text-xl font-medium tracking-tight text-balance">
                  {category.title}
                </h2>
              </div>
              <p className="mt-0.5 text-sm font-medium text-primary">
                {category.tagline}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground text-pretty">
                {category.blurb}
              </p>
            </div>

            <dl className="divide-y divide-border/80 border-y border-border/80">
              {category.terms.map((term) => (
                <div
                  key={term.term}
                  className="grid gap-0.5 py-2 sm:grid-cols-[minmax(10rem,13rem)_1fr] sm:gap-5"
                >
                  <dt className="font-serif text-sm font-medium leading-snug">
                    {term.term}
                  </dt>
                  <dd className="space-y-1">
                    <p className="text-sm leading-snug text-muted-foreground">
                      {term.definition}
                    </p>
                    {term.note ? (
                      <p className="flex gap-2 text-xs leading-snug text-secondary-foreground">
                        <Lightbulb className="mt-0.5 size-3.5 shrink-0 text-primary" />
                        <span>{term.note}</span>
                      </p>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      <p className="mt-10 max-w-xl font-serif text-lg font-medium leading-snug text-foreground/80">
        That&apos;s the full block set. Everything else is just combining these
        in different orders.
      </p>
    </div>
  );
}
