import React from "react";

const chatData = [
  {
    title: "OGATCHAT Podcast Episode 1",
    link: "https://www.youtube.com/watch?v=eFWeRl2lHQ8",
    description:
      "Highlights:\nUpcoming Madball Tournament Info\nHow Luke discovered OGAT\nBUG OF THE WEEK - Glitch through Forcefield Barriers\nOther games we played\nand more!",
  },
  {
    title: "OGATCHAT Podcast Episode 2",
    link: "https://www.youtube.com/watch?v=FDUnV6SVvoc",
    description:
      "Highlights:\nReview of OGAT guide: How to be Pro by Moe\nBug of the Week!",
  },
  {
    title: "OGATCHAT Podcast Episode 3",
    link: "https://www.youtube.com/watch?v=O6jBmmFirsc",
    description:
      'Highlights:\nWe both become investigative journalists in 3 minutes or less\nReview of "How To Be A Good Carrier" guide by Queeny Chloe\nBug of the Week: Grenade Delay bug (CONTROVERSIAL, SAUCY)',
  },
  {
    title: "OGATCHAT Podcast Episode 4",
    link: "https://www.youtube.com/watch?v=M-9ZIATyk-0",
    description:
      'Highlights from this episode:\nREAL NEWS about future game updates from developer Helba *wow*\nGuide Review: "Gameplay: 1. Basics" by Idulus\nBug of the Week\n*This episode sponsored by The Woodforge - Purveyors of High Quality Handmade Wooden Weapons*',
  },
  {
    title: "OGATCHAT Podcast Special Madball Announcement",
    link: "https://www.youtube.com/watch?v=uxqcW4Fl2_k",
    description:
      "Going over the Madball Beach Bonanza 2019 rules and regulations. And other rambling.",
  },
  {
    title: "OGATCHAT Podcast Episode 5",
    link: "https://www.youtube.com/watch?v=3BPEV6qVRXo",
    description:
      "Weird format this time. Highlights of this episode:\nTalk about our new sponsor and slogan,\nReviewing OGAT Steam Reviews\nWe also reach Nirvana halfway through with an impromptu meditation session???\nNo bug of the week, sorry :(",
  },
  {
    title: "OGATCHAT Podcast Episode 6 - feat. guest host CasualYoutuber31",
    link: "https://www.youtube.com/watch?v=ocZluKqEUak",
    description:
      "Special guest host! CasualYoutuber31\nHighlights from this episode:\nWe're talking Madball Beach Bonanza 2k19\nInterview with CasualYoutuber31\nBreakdown of Madball Teams/Players\nBug of the Week",
  },
  {
    title: "OGATCHAT Podcast Special Update+Announcement",
    link: "https://www.youtube.com/watch?v=F_l7LbHFBzU",
    description:
      "Today's highlights:\nHeads up. Where have we been?! Sorry!\nNeat announcement of a new project\nMany, many apologies for our absence.\nWe'll be back ASAP!\n\n*Special note, we didn't lose our Woodforge advertisement I just forgot to put in the ad lol oops but it's too late now I'm already running late for karate and I'll have to get my butt kicked if I'm too late",
  },
  {
    title: "OGATCHAT Podcast Episode 7 feat. guest Meninistic Traplord",
    link: "https://www.youtube.com/watch?v=0W4bHihBL1M",
    description:
      "Quick interview recorded during the OGATCHAT hiatus!\nHighlights, we're talking:\nOngoing Madball Tournament,\n3 good things about OGAT\n3 things to change about OGAT\nBug of the Week - Guardian Shield Bug",
  },
  {
    title: "OGATCHAT Off-the-Record Episode 1",
    link: "https://www.youtube.com/watch?v=FJfY2r5Q2ww",
    description:
      "OGATCHAT Off-the-Record is finally here! The long awaited, never hated, master...piece of amateur podcasting brings you Ty (Lick_the_Taint) and Kyle's (CallofKyle) thoughts on Avengers: Endgame. We break down the movie, what we liked, what we didn't like, and even throw in some talk of One Punch Man and Black Mirror. \n\nThis is a long one folks, buckle up. \n\nDon't forget to Lick, Comment and Subscribe for more content, also check out our patreon, kickstarter, gofundme, indiegogo, and pornhub accounts.",
  },
  {
    title: "OGATCHAT Off-the-Record Snack Tier List",
    link: "https://www.youtube.com/watch?v=XMudDjJW-VM",
    description:
      "Today we're jumping on those dank meme (meemee as the kids call them) bandwagons. \nFeaturing guest: MeninisticTraplord",
  },
  {
    title: "OGATCHAT Podcast Racing Tournament Announcement",
    link: "https://www.youtube.com/watch?v=ujh6EzqhnG4",
    description:
      "It's the official OGAT DUII Dash tournament announcement!\nAll information is also available in the event announcements page googledoc.",
  },
  {
    title: "OGATCHAT Podcast Episode 9",
    link: "https://www.youtube.com/watch?v=WB77z7UaSw0",
    description:
      "Quick return episode! The Hiatus has (temporarily) ended!\nOn this quickie, discussed is the current beta testing process for the upcoming OGAT update as well as bug of the week!",
  },
  {
    title: "OGATCHAT Podcast Episode 10 feat. CallofKyle",
    link: "https://www.youtube.com/watch?v=g-9l3GBjzs0",
    description:
      "NEW OGAT UPDATE!\nInteresting interview today! This episodes highlights:\nWe're talking...gambling? OGATCHAT Gambling Tips and Tricks podcast?\nWe talk all things new update (as far as we knew the day before!)\nBreaking down Kyle's thoughts on the new update material without actually seeing it yet,\n\nBug of the Week!",
  },
  {
    title: "OGATCHAT OTR Animyst Gameplay feat. CasualYoutuber31",
    link: "https://www.youtube.com/watch?v=IqHOjPPQFTU",
    description:
      "Check out Animyst on Steam, it's a sweet Free to Play PS2-era throwback PvP Spellcrafter with great developers that are actively improving the game consistently. It's a lot of fun, and would be great to check out as a big group.",
  },
  {
    title: "OGATCHAT Podcast Episode 11",
    link: "https://www.youtube.com/watch?v=XcPMadmHyL8",
    description:
      "We're back! This episode we're talking:\n\nThe bullying crisis plaguing OGAT,\nRacist OGAT Skins (?),\nMaking sweet fried love to Colonel Sanders,\nBug of the Week!",
  },
];

const Page = () => {
  return (
    <div className="container mx-auto pb-10 pt-10">
      <h1 className="mb-4 text-2xl font-bold">OGATCHAT Podcast Episodes</h1>
      <p className="mb-8 border-b-2 pb-4 text-gray-700">
        OGATCHAT Podcast is the #1 OGAT podcast on the internet. Hosted by{" "}
        <span className="font-bold">Ty (Lick_the_Taint)</span> and{" "}
        <span className="font-bold">Kyle (CallofKyle)</span>. They cover
        everything OGAT—updates, guides, tournaments, and the legendary “Bug of
        the Week”. The show also brings in a stellar lineup of guests, like
        CasualYoutuber31 (Madball expert extraordinaire) and MeninisticTraplord
        (always ready with a spicy take), to keep things fresh and completely
        off the rails. Oh, and if you’re into deep dives on snacks, memes, or
        impromptu meditation sessions, you’re in for a treat. It’s messy, it’s
        ridiculous, and it’s exactly what you’d expect from the best OGAT
        podcast in existence.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {chatData.map((video, index) => {
          const videoId = new URL(video.link).searchParams.get("v");
          return (
            <div key={index} className="rounded-lg border p-2 shadow-md">
              <iframe
                className="w-full rounded-lg"
                height="400"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h2 className="mt-2 text-lg font-medium">{video.title}</h2>
              <p className="text-sm text-gray-500">{video.description}</p>
            </div>
          );
        })}
      </div>
      <div className="pt-5 text-sm italic text-gray-500">
        *Note: OGAT Guardian is not affiliated with OGATCHAT Podcast (We would
        love to). We are just journalists and fans of the show.
      </div>
    </div>
  );
};

export default Page;
