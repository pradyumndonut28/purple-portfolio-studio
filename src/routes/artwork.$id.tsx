import { createFileRoute, notFound } from "@tanstack/react-router";
import { getArtworkById } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Instagram, Mail } from "lucide-react";

export const Route = createFileRoute("/artwork/$id")({
  loader: ({ params }) => {
    const artwork = getArtworkById(params.id);
    if (!artwork) {
      throw notFound();
    }
    return artwork;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.title} — Tinu.fr` : "Artwork — Tinu.fr";
    const description = loaderData?.description ?? "Graphic design artwork by Pradyumn Mathur.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ArtworkDetail,
});

function ArtworkDetail() {
  const artwork = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </a>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-2xl">
            <div className="relative">
              <img
                src={artwork.image}
                alt={artwork.title}
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover"
              />
              {/* Watermark overlay */}
              <div className="pointer-events-none absolute inset-0 watermark-pattern" />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="rotate-[-12deg] select-none text-5xl font-black uppercase tracking-widest text-foreground/10 sm:text-7xl lg:text-8xl">
                  TINU.FR
                </span>
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                {artwork.category}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {artwork.title}
              </h1>
              <p className="mt-4 leading-relaxed text-muted-foreground">{artwork.description}</p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <dl className="space-y-4">
                <div className="flex justify-between">
                  <dt className="text-sm text-muted-foreground">Year</dt>
                  <dd className="text-sm font-medium text-foreground">{artwork.year}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-muted-foreground">Category</dt>
                  <dd className="text-sm font-medium text-foreground">{artwork.category}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-muted-foreground">Artist</dt>
                  <dd className="text-sm font-medium text-foreground">Pradyumn Mathur</dd>
                </div>
              </dl>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">Interested in working together?</p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://instagram.com/tinu.fr_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full gap-2 rounded-full">
                    <Instagram className="h-4 w-4" />
                    @tinu.fr_
                  </Button>
                </a>
                <a href="mailto:pradyumnmathur@gmail.com">
                  <Button variant="outline" className="w-full gap-2 rounded-full">
                    <Mail className="h-4 w-4" />
                    pradyumnmathur@gmail.com
                  </Button>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
