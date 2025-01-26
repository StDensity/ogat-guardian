import DeveloperCard from "@/components/project-ball/DeveloperCard";
import Link from "next/link";
import VideoCardsGrid from "@/components/project-ball/VideoCardsGrid";
import { Metadata } from "next";
import Hero from "./Hero";

export async function generateMetadata(): Promise<Metadata> {
  // Static metadata since this is a fixed page
  const title = "Project Ball | Ogat Guardian Logo Controversy";
  const description =
    "Discover why Ogat Guardian logo appeared in Project Ball. Explore developer regrets, hidden logo sightings, and join our community scavenger hunt.";

  return {
    title,
    description,
    openGraph: {
      title: "Project Ball Developers vs Ogat Guardian Logo Mandate",
      description,
      type: "website",
      images: [
        {
          url: "/community/bg-image-fallback.png",
          width: 1200,
          height: 630,
          alt: "Project Ball developers standing in stadium with controversial logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Project Ball | The Great Logo Controversy",
      description:
        "Why developers had to include the Ogat Guardian logo against their will - exclusive insights",
      images: ["/community/bg-image-fallback.png"],
    },
  };
}

export default function ProjectBallPage() {
  const mediaSections = [
    {
      videoSrc:
        "https://videos.ctfassets.net/blh9d07agz8n/6hEcACH4daqkWGg367JnUm/7c1e084b114b74a4d2c433029e45e364/Goalie-1.mp4",
      title: "Bored of ordinary life?",
      description:
        "Experience the thrill of being a goalie in Project Ball. 'It's like real life, but with less injuries'.",
      reverse: false,
      tag: "",
      fallbackImg: "community/goalie-1-fallback.png",
    },
    {
      videoSrc:
        "https://videos.ctfassets.net/blh9d07agz8n/eu91aWKy40sMqiDl6GGQq/c51eb964a9e803b769238827754afb9b/Goalie-2.mp4",
      title: "We know what it feels to be a goalie...",
      description:
        "When feeling left out, you can always count the 'goalie watch'.",
      tag: "Big Screen donated by The Guardian",
      fallbackImg: "community/goalie-2-fallback.png",
    },

    {
      videoSrc:
        "https://videos.ctfassets.net/blh9d07agz8n/6NSx4K5WCw8dKPXaODYRVC/0b4192d04f9effd6b689219c81b3be63/Redefine-Walking.mp4",
      title: "Ever felt like running is slow?",
      description: "No more worries, slide like a champ!",
      reverse: false,
      fallbackImg: "community/redefined-walking-fallback.png",
    },
    {
      videoSrc:
        "https://videos.ctfassets.net/blh9d07agz8n/5afJmV0BxUp6xcwWReWxhR/82e57dd84c77b4d3f94cdf4804f8ddf5/No-Referee-1.mp4",
      title: "No referees included!!",
      description:
        "Here you can exercise your free wills. 'No fouls, no offside, no mercy'.",
      fallbackImg: "community/no-referee-fallback.png",
    },
    {
      videoSrc:
        "https://videos.ctfassets.net/blh9d07agz8n/2wocWHWuKzMBM2iQo0AxJJ/12ed0889088f067608c80fa2aecadd38/No-Referee-2.mp4",
      title: "Goalie being too good? No problem!",
      description:
        "We have the perfect solution for you. 'Just kick him harder'.",
      reverse: false,
      fallbackImg: "community/no-referee-2-fallback.png",
    },
    {
      videoSrc:
        "https://videos.ctfassets.net/blh9d07agz8n/PdVa5HXbTEetxolvKQfgr/4ce7c295d8a5ef377a443908e3e4b7fe/Tired-Grab-A-Coke.mp4",
      title: "We all get tired chasing the ball.",
      description:
        "Grab a coke and enjoy the game. Our real life Immersive 'goalie watch' will keep you entertained, it's not VR it's just R.",
      tag: "Big Screen donated by The Guardian",
      fallbackImg: "community/grab-a-coke-fallback.png",
    },
  ];

  return (
    <div className="font-open_sans">
      {/* Hero Section with Background */}
      <Hero />

      {/* Developer Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          <DeveloperCard
            name="Comi"
            role="Lead dev"
            quote="Should've sticked with ogat 2'"
            videoSrc="https://videos.ctfassets.net/blh9d07agz8n/3yRUXB53wUeBerqBycEx3m/007bb5e121b58cabf0df5754ad13767d/Juggling.mp4"
            avatarSrc="/community/comi.png"
            fallbackImg="community/juggling-fallback.png"
          />

          <DeveloperCard
            name="Josh"
            role="The new art guy"
            quote="The logo reduces the ball gravity by .6% - trust me bro"
            videoSrc="https://videos.ctfassets.net/blh9d07agz8n/45Kl45SUNex5slGuO20BGA/44ca04d4a941ceb2d7b51eb019eada5b/Ball-Physics.mp4"
            avatarSrc="/community/jm.png"
            fallbackImg="community/ball-physics-fallback.png"
          />
        </div>
      </section>

      {/* Video Cards Grid Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center font-noto_serif text-4xl font-bold text-customDarkBlue">
          Game Features
        </h2>
        <VideoCardsGrid cards={mediaSections} />
      </section>

      {/* Small Interactive Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl rounded-xl bg-guardianBlue/10 p-8">
          <h3 className="mb-4 font-noto_serif text-2xl font-bold">
            Think You Can Spot All the Logos?
          </h3>
          <p className="mb-6">Join our community scavenger hunt:</p>
          <Link
            href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
            className="rounded-lg bg-guardianBlue px-8 py-3 text-white transition-colors hover:bg-customDarkBlue"
          >
            Enter Challenge →
          </Link>
          <p className="mt-4 text-sm text-gray-600">
            Prize: Eternal glory (and maybe a mousepad)
          </p>
        </div>
      </section>
    </div>
  );
}
