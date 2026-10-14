import { createFileRoute, Link } from "@tanstack/react-router";
import { artworks } from "@/data/portfolio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, ArrowRight, Sparkles } from "lucide-react";
import type { MouseEvent } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pradyumn Mathur — Graphic Design Portfolio" },
      { name: "description", content: "Portfolio of a young graphic designer exploring visual identity, typography, and digital art." },
      { property: "og:title", content: "Pradyumn Mathur — Graphic Design Portfolio" },
      { property: "og:description", content: "Portfolio of a young graphic designer exploring visual identity, typography, and digital art." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  );
}

// One seamless wave tile (1200 wide). Two tiles are placed side by side so the
// layer can drift left by exactly one tile and loop with no visible jump.
const WAVE_TILE = "M0 60 C 200 0, 400 0, 600 60 S 1000 120, 1200 60 L1200 200 L0 200 Z";

function HeroWaves() {
  return (
    <div className="hero-waves" aria-hidden="true">
      {[1, 2, 3].map((layer) => (
        <svg
          key={layer}
          className={`hero-wave hero-wave--${layer}`}
          viewBox="0 0 2400 200"
          preserveAspectRatio="none"
        >
          <path d={WAVE_TILE} />
          <path d={WAVE_TILE} transform="translate(1200 0)" />
        </svg>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
      <div className="bg-gradient-radial pointer-events-none absolute inset-0 opacity-70" />
      <HeroWaves />
      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-primary" />
          <span>17 y/o graphic designer</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Designing with <span className="text-gradient">purpose</span> & <span className="text-gradient">passion</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Hi, I'm Pradyumn — a young creative exploring visual identity, typography, and digital art.
          This is where I share my experiments and growth as a designer.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#work">
            <Button size="lg" className="gap-2 rounded-full px-8">
              View my work <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          <a href="#contact">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Get in touch
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">About me</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A curious beginner with big dreams
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                I'm Pradyumn, 17 years old, and I recently started my journey into graphic design.
                What began as curiosity quickly turned into a passion for creating visuals that feel
                bold, clean, and meaningful.
              </p>
              <p>
                I'm currently in a drop year, focusing on my exams while spending my free time
                learning design tools, studying typography, and building projects like this one.
              </p>
              <p>
                I love experimenting with colors — especially violet and purple tones — and I'm
                constantly inspired by modern branding, editorial layouts, and digital illustration.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-violet-300/20 blur-2xl" />
            <div className="relative rounded-3xl border border-border/60 bg-card p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <Stat label="Age" value="17" />
                <Stat label="Experience" value="Beginner" />
                <Stat label="Focus" value="Branding" />
                <Stat label="Style" value="Bold & Clean" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-secondary p-6 text-center">
      <p className="text-2xl font-bold text-foreground">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Selected work</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Projects & experiments
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Click any piece to view it up close with its watermark.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full max-w-5xl"
        >
          <CarouselContent className="-ml-4">
            {artworks.map((artwork) => (
              <CarouselItem key={artwork.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Link
                  to="/artwork/$id"
                  params={{ id: artwork.id }}
                  viewTransition
                  onClick={(e) => {
                    const img = e.currentTarget.querySelector("img");
                    if (img) {
                      img.style.viewTransitionName = `artwork-${artwork.id}`;
                    }
                  }}
                  className="group block overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                        {artwork.category}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-white">{artwork.title}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">{artwork.title}</h3>
                        <p className="text-sm text-muted-foreground">{artwork.category}</p>
                      </div>
                      <span className="text-xs font-medium text-primary">{artwork.year}</span>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-center gap-4">
            <CarouselPrevious className="static translate-x-0 translate-y-0" />
            <CarouselNext className="static translate-x-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

function Contact() {
  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    event.currentTarget.style.setProperty("--pointer-x", `${x}%`);
    event.currentTarget.style.setProperty("--pointer-y", `${y}%`);
    event.currentTarget.style.setProperty("--shift-x", `${(x - 50) * 0.12}px`);
    event.currentTarget.style.setProperty("--shift-y", `${(y - 50) * 0.12}px`);
  };

  const resetPointer = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--pointer-x", "50%");
    event.currentTarget.style.setProperty("--pointer-y", "50%");
    event.currentTarget.style.setProperty("--shift-x", "0px");
    event.currentTarget.style.setProperty("--shift-y", "0px");
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div
          className="contact-aurora relative overflow-hidden rounded-3xl border border-border/60 bg-card px-6 py-16 text-center shadow-xl sm:px-12"
          onMouseMove={handlePointerMove}
          onMouseLeave={resetPointer}
        >
          <div className="contact-aurora__wash" aria-hidden="true" />
          <div className="contact-aurora__light" aria-hidden="true" />
          <div className="contact-aurora__grain" aria-hidden="true" />
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let's create something together
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Whether it's a project, collaboration, or just a friendly hello — I'd love to hear from you.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://instagram.com/tinu.fr_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2 rounded-full px-8">
                  <Instagram className="h-5 w-5" />
                  Follow on Instagram
                </Button>
              </a>
              <a href="mailto:pradyumnmathur@gmail.com">
                <Button variant="outline" size="lg" className="gap-2 rounded-full px-8">
                  <Mail className="h-5 w-5" />
                  Send an email
                </Button>
              </a>
            </div>
            <div className="mt-8 space-y-2 text-sm text-muted-foreground">
              <p>
                Instagram:{" "}
                <a
                  href="https://instagram.com/tinu.fr_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground hover:text-primary"
                >
                  @tinu.fr_
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:pradyumnmathur@gmail.com"
                  className="font-medium text-foreground hover:text-primary"
                >
                  pradyumnmathur@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
