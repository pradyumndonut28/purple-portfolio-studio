import spiderVersePoster from "@/assets/spider-verse-poster.png.asset.json";
import hrithikRoshanTribute from "@/assets/hrithik-roshan-tribute.png.asset.json";
import rx100Poster from "@/assets/rx-100-poster.png.asset.json";
import emiwayBantaiPoster from "@/assets/emiway-bantai-fan-poster.jpg.asset.json";

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
    id: "emiway-bantai-fan-poster",
    title: "Emiway Bantai — Voice of the Streets",
    category: "Fan Poster",
    year: "2026",
    description:
      "A monochrome tribute to Emiway Bantai, layered with expressive portraits, bold red typography, and references to his independent Indian hip-hop journey.",
    image: emiwayBantaiPoster.url,
    aspectRatio: "aspect-[1358/1920]",
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
    id: "rx-100-poster",
    title: "RX-100",
    category: "Fan Poster",
    year: "2026",
    description:
      "A vintage Yamaha RX-100 poster blending rustic Indian scenery with bold typography — celebrating an old soul with a wild heart.",
    image: rx100Poster.url,
    aspectRatio: "aspect-[4/5]",
  },
];

export function getArtworkById(id: string): Artwork | undefined {
  return artworks.find((artwork) => artwork.id === id);
}
