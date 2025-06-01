import type React from "react";
import { Smartphone, Infinity, Share2 } from "lucide-react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-8">
      <div className="mb-6 h-16 flex items-center justify-center">{icon}</div>
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export function BenefitsSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <BenefitCard
          icon={<Smartphone className="h-10 w-10" />}
          title="100% Responsive"
          description="No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen."
        />
        <BenefitCard
          icon={<Infinity className="h-10 w-10" />}
          title="No Photo Upload Limit"
          description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
        />
        <BenefitCard
          icon={<Share2 className="h-10 w-10" />}
          title="Available to Embed"
          description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
        />
      </div>
    </section>
  );
}
