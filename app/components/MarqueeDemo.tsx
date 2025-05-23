import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from 'next/image';

const reviews = [
  {
    name: "Syosset Motors",
    username: "@syossetmotors",
    body: "Carfilio is a total game-changer. We've already closed 11 referral deals in our first 60 days, and they are the easiest sales we have ever made ",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Hillside Leasing",
    username: "@hillsideleasing",
    body: "We cut our ad spend by 40% last month because Carfilio started bringing in organic leads that actually converted",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Siller Motors",
    username: "@sillermotors",
    body: "We closed a $40K SUV deal from a customer referral—no ad budget, no chasing. Carfilio paid for itself in one day",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Syosset Motors",
    username: "@syossetmotors",
    body: "Carfilio is a total game-changer. We've already closed 11 referral deals in our first 60 days, and they are the easiest sales we have ever made ",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Hillside Leasing",
    username: "@hillsideleasing",
    body: "We cut our ad spend by 40% last month because Carfilio started bringing in organic leads that actually converted",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Siller Motors",
    username: "@sillermotors",
    body: "We closed a $40K SUV deal from a customer referral—no ad budget, no chasing. Carfilio paid for itself in one day",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Syosset Motors",
    username: "@syossetmotors",
    body: "Carfilio is a total game-changer. We've already closed 11 referral deals in our first 60 days, and they are the easiest sales we have ever made ",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Hillside Leasing",
    username: "@hillsideleasing",
    body: "We cut our ad spend by 40% last month because Carfilio started bringing in organic leads that actually converted",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Siller Motors",
    username: "@sillermotors",
    body: "We closed a $40K SUV deal from a customer referral—no ad budget, no chasing. Carfilio paid for itself in one day",
    img: "https://avatar.vercel.sh/john",
  },
 
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width={32} height={32} alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
