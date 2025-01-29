import DiscordInvite from "@/components/misc/DiscordInvite";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  const pageTitle = "Subscribe to The OGAT Guardian Newsletter | Stay Informed";
  const pageDescription =
    "Get exclusive news updates, breaking stories, and curated content directly to your inbox. Never miss important updates from The OGAT Guardian.";
  const imageUrl = "/ogat_guardian_img.png";

  return {
    title: pageTitle,
    description: pageDescription,
    keywords:
      "newsletter subscription, email updates, OGAT news, guardian alerts, daily news digest",
    alternates: {
      canonical: "https://ogatguardian.vercel.app/subscribe",
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: "https://ogatguardian.vercel.app/subscribe",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "The OGAT Guardian Newsletter Subscription",
          secureUrl: imageUrl,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
      creator: "@OGATGuardian",
    },
  };
};

const page = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-md space-y-3">
        {/* Add semantic HTML and ARIA labels */}
        <header className="space-y-2 text-center">
          <h1 className="text-2xl font-bold">Subscribe to The OGAT Guardian</h1>
          <p className="text-muted-foreground">Never Miss Important Updates</p>
        </header>

        {/* Subscription Form */}
        <form role="form" aria-label="Subscription form" className="space-y-4">
          <div className="space-y-3">
            <Input
              placeholder="OGAT Username"
              aria-label="Enter your OGAT username"
              name="username"
            />
            <Input
              type="email"
              placeholder="Email"
              aria-label="Enter your email address"
              name="email"
              required
            />
            <Button
              className="w-full bg-guardianBlue text-white hover:bg-guardianBlue hover:bg-opacity-90"
              type="submit"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </Button>
          </div>
        </form>

        {/* Discord Section */}
        <section aria-labelledby="discord-heading">
          <h2 id="discord-heading" className="sr-only">
            Join Our Discord
          </h2>
          <DiscordInvite
            imgUrl="/ogat_guardian_img_small.png"
            serverName="The OGAT Guardian Community"
            inviteLink="https://discord.com/invite/y9tQGXnnAe"
            altText="OGAT Guardian Discord Server Preview"
          />
        </section>

        {/* Add privacy assurance */}
        <p className="text-center text-xs text-muted-foreground">
          {`We don't respect your privacy.`}
        </p>
      </div>
    </div>
  );
};

export default page;
