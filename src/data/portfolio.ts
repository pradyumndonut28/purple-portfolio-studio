import spiderVersePoster from "@/assets/spider-verse-poster.png.asset.json";
import hrithikRoshanTribute from "@/assets/hrithik-roshan-tribute.png.asset.json";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";

export interface Artwork {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  aspectRatio: string;
}

export const artworks: Artwork[] = [
  {
    id: "spider-verse-poster",
    title: "Spider-Man: Into the Spider-Verse",
    category: "Fan Poster",
    year: "2026",
    description:
      "A comic-inspired collage poster celebrating the multiverse, mixing halftone textures, bold typography, and iconic characters.",
    image: spiderVersePoster.url,
    aspectRatio: "aspect-square",
  },
  {
    id: "hrithik-roshan-tribute",
    title: "From Then. Through Now. Beyond.",
    category: "Tribute Poster",
    year: "2026",
    description:
      "A cinematic tribute poster celebrating Hrithik Roshan’s journey, combining layered portraiture, bold gradient typography, and an inspirational quote.",
    image: hrithikRoshanTribute.url,
    aspectRatio: "aspect-[12/17]",
  },
  {
    id: "type-harmony",
    title: "Type Harmony",
    category: "Typography",
    year: "2026",
    description:
      "An exploration of classical serif letterforms arranged in a playful, balanced composition.",
    image: work2,
    aspectRatio: "aspect-square",
  },
  {
    id: "velmore-identity",
    title: "Velmoré Identity",
    category: "Branding",
    year: "2026",
    description:
      "A luxury brand identity mockup featuring deep purple stationery, gold foil accents, and refined typography.",
    image: work3,
    aspectRatio: "aspect-square",
  },
  {
    id: "cosmic-dreams",
    title: "Cosmic Dreams",
    category: "Digital Illustration",
    year: "2026",
    description:
      "An ethereal album cover artwork inspired by nebulas, clouds, and the infinite violet sky.",
    image: work4,
    aspectRatio: "aspect-square",
  },
  {
    id: "purple-youth",
    title: "Purple Youth",
    category: "Social Graphic",
    year: "2026",
    description:
      "A bold collage-style social media graphic mixing photography, textures, and vibrant purple forms.",
    image: work5,
    aspectRatio: "aspect-square",
  },
];

export function getArtworkById(id: string): Artwork | undefined {
  return artworks.find((artwork) => artwork.id === id);
}
