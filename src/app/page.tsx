import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categories, totalTermCount } from "@/lib/glossary-data";

const storyBeats = [
  {
    layers: "1–2",
    title: "One page, one file",
    body: (
      <>
        Say you&apos;re starting a mowing business. You build yourself a
        single web page — one link on the internet, one file on your computer
        — that just says{" "}
        <span className="font-medium text-foreground">
          &ldquo;Aden&apos;s Mowing&rdquo;
        </span>. That&apos;s already three ideas at once: what a computer is running,
        what a webpage actually is, and what&apos;s packaged inside that one
        file.
      </>
    ),
  },
  {
    layers: "3",
    title: "Getting the world to it",
    body: (
      <>
        Now you want the rest of the world to find it. That means buying a
        domain and pointing it at a server that&apos;s actually listening for
        it — the whole cast of domains, DNS, IP addresses, and ports.
      </>
    ),
  },
  {
    layers: "4–6",
    title: "Remembering visitors",
    body: (
      <>
        Then you want visitors to leave their mobile number, in a queue only
        you can see. A static file can&apos;t do that — so now you need a
        database designed <em>before</em> you write a line of app code, a real
        back end that can save and query state, and a front end that talks to
        it over an API.
      </>
    ),
  },
  {
    layers: "7–10",
    title: "The harder stuff",
    body: (
      <>
        Scale that idea up — a transcription tool, a booking system, a SaaS
        product other businesses pay for — and you start running into
        logistics, control flow, the split between internal tools and
        multi-tenant products, and why modelling your data early saves you
        from a painful migration later.
      </>
    ),
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
      <section className="max-w-3xl">
        <Badge variant="secondary" className="mb-5 px-3 py-1">
          A field guide for vibe coding
        </Badge>

        <h1 className="font-serif text-4xl font-medium tracking-tight text-balance sm:text-5xl sm:leading-[1.15]">
          You don&apos;t build Lego from raw plastic.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Vibe coding works the same way. Once you know the building blocks —
          what they&apos;re called and what they actually do — you snap them
          together instead of reinventing them each time. This is a quick pass
          through those blocks, told through one running example.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <Link href="/glossary">
              Open the full glossary
              <ArrowRight />
            </Link>
          </Button>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="rounded-md bg-secondary px-2.5 py-1 font-medium text-secondary-foreground">
              {categories.length} layers
            </span>
            <span className="rounded-md bg-secondary px-2.5 py-1 font-medium text-secondary-foreground">
              {totalTermCount} terms
            </span>
          </div>
        </div>
      </section>

      <section className="mt-16 sm:mt-20">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            The running example
          </p>
          <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight">
            Aden&apos;s Mowing
          </h2>
          <p className="mt-2 text-muted-foreground">
            One business, ten layers — from a single file to a product you
            could sell.
          </p>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2">
          {storyBeats.map((beat) => (
            <li key={beat.layers}>
              <Card className="h-full shadow-none">
                <CardHeader>
                  <CardDescription className="font-medium text-primary">
                    Layers {beat.layers}
                  </CardDescription>
                  <CardTitle className="font-serif text-xl font-medium">
                    {beat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {beat.body}
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16 sm:mt-20">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
              Ten groups
            </p>
            <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight">
              The roadmap
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Jump straight into a layer, or read them in order. Each one
            unlocks the next.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/glossary#${category.slug}`}
              className="group"
            >
              <Card className="relative h-full overflow-hidden shadow-none transition-all group-hover:-translate-y-0.5 group-hover:border-primary/30 group-hover:bg-accent/60 group-hover:shadow-sm">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-1 -top-3 font-serif text-7xl font-medium text-primary/15 transition-colors group-hover:text-primary/25"
                >
                  {String(category.layer).padStart(2, "0")}
                </span>
                <CardHeader>
                  <CardDescription>Layer {category.layer}</CardDescription>
                  <CardTitle className="pr-12 text-base">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {category.tagline}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
