import DeveloperCard from "@/components/project-ball/DeveloperCard";
import Link from "next/link";

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
  return (
    <div className="font-open_sans">
      {/* Hero Section with Background */}
      <Hero />

      {/* Developer Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <DeveloperCard
            name="Comi"
            role="Lead dev"
            quote="Should've sticked with ogat 2'"
            videoSrc="/videos/juggling.mp4"
            avatarSrc="/community/comi.png"
            fallbackImg="community/juggling-fallback.png"
          />

          <DeveloperCard
            name="J"
            role="The new art guy"
            quote="The logo reduces the ball gravity by .6% - trust me bro"
            videoSrc="/videos/ball-physics.mp4"
            avatarSrc="/community/jm.png"
            fallbackImg="community/ball-physics-fallback.png"
          />
        </div>
      </section>

      {/* Screenshot Carousel */}
      {/* <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center font-noto_serif text-3xl font-bold">
            Controversial Logo Sightings
          </h2>

          <div className="scrollbar-hide flex gap-4 overflow-x-scroll pb-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group relative w-80 flex-shrink-0">
                <img
                  src={`https://source.unsplash.com/random/800x600/?football,stadium,${item}`}
                  className="transform rounded-lg shadow-lg transition-transform group-hover:scale-105"
                  alt="Game screenshot"
                />
                <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-black/60 p-4 text-white">
                  <p className="text-sm">
                    Found in{" "}
                    {
                      [
                        "locker room",
                        "ball texture",
                        "crowd banner",
                        "referee shirt",
                      ][item - 1]
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

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
