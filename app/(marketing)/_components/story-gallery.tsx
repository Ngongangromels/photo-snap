
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface StoryCardProps {
  title: string;
  author: string;
  imageSrc: string;
}

const StoryCard = ({ title, author, imageSrc }: StoryCardProps) => {
  return (
    <div className="relative group overflow-hidden">
      <div className="relative h-[400px] w-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm mb-4">by {author}</p>
        <hr className="py-2 w-[300px]"/>
        <button className="flex items-center justify-between w-full text-sm uppercase font-bold cursor-pointer">
          Read Story <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export const StoryGallery = () => {
  const stories = [
    {
      id: 1,
      title: "The Mountains",
      author: "Romels Ngongang",
      imageSrc: "/STORY1.jpg",
    },
    {
      id: 2,
      title: "Sunset Cityscapes",
      author: "Gyls Ngongang",
      imageSrc: "/STORY2.jpg",
    },
    {
      id: 3,
      title: "18 Days Voyage",
      author: " jores Ngongang",
      imageSrc: "/STORY3.jpg",
    },
    {
      id: 4,
      title: "Architecturals",
      author: "Fabric Ngongang",
      imageSrc: "/STORY4.jpg",
    },
  ];

  return (
    <section className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {stories.map((story) => (
        <StoryCard
          key={story.id}
          title={story.title}
          author={story.author}
          imageSrc={story.imageSrc}
        />
      ))}
    </section>
  );
}
