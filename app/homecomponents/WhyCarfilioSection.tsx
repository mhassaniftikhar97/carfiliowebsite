import React from "react";
import {
  Contact,
  Users,
  Bell,
  LayoutDashboard,
  MessageSquare,
  Car,
} from "lucide-react";

const features = [
  {
    title: "A Keychain That Sells for You",
    description:
      "Forget business cards—Carfilio’s keychain turns every customer interaction into a lead. One tap, instant connection.",
    icon: Contact,
  },
  {
    title: "Never Miss a Hot Lead",
    description:
      "Get real-time alerts the moment a customer shows interest. Whether it’s an inquiry or a test drive request, you’ll be the first to know.",
    icon: Bell,
  },
  {
    title: "Customers That Bring You More Customers",
    description:
      "Turn satisfied buyers into brand advocates. With Carfilio, customers can refer friends with a tap, fueling organic growth.",
    icon: Users,
  },
  {
    title: "Your Entire Sales Pipeline in One View",
    description:
      "No more scattered data—Carfilio gives your team a real-time dashboard of every customer interaction, referral, and deal status.",
    icon: LayoutDashboard,
  },
  {
    title: "Fast-Track Sales & Financing",
    description:
      "Make it easy for customers to schedule test drives, apply for financing, and complete paperwork—all from their phones.",
    icon: MessageSquare,
  },
  {
    title: "Seamless CRM That Works Without the Hassle",
    description:
      "Carfilio integrates with your existing workflow, automatically tracking interactions so you can focus on closing deals.",
    icon: Car,
  },
];

const WhyCarfilioSection = () => {
  return (
    <div className="p-10 xl:p-24 bg-blue-700 text-white tracking-tight leading-tight flex flex-col gap-5 items-center justify-center">
      <h3 className="text-5xl">Why Carfilio?</h3>
      <h5 className="text-xl text-center">
        Carfilio isn&apos;t just another CRM—it&apos;s a lead-generation powerhouse designed for dealerships. 
        From keychain-powered connections to effortless referrals, we make customer engagement work for you.
      </h5>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col xl:gap-5 gap-3 xl:p-10 p-5 rounded-2xl border-white/30 hover:border-white/60 hover:border-2 border-[1px]"
          >
            <feature.icon className="text-white h-10 w-10 mb-2" />
            <h5 className="text-3xl">{feature.title}</h5>
            <p className="text-xl text-white/70 font-light">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyCarfilioSection;
