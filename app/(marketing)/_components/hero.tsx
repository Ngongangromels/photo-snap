import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// Hero page structure


export const Hero = () => {
  return (
    <section className="grid grid-cols-6">
      
      <div className="flex flex-col justify-center col-span-2 w-full  bg-black px-6 py-16 text-white md:px-16 md:py-24 lg:py-32">
        <h1 className="mb-6 text-2xl font-bold uppercase tracking-wide md:text-2xl lg:text-5xl">
          Create and share your photo stories.
        </h1>
        <p className="mb-8 text-sm opacity-60 md:text-base">
         
        </p>
        <Link
          href="#"
          className="flex items-center text-sm font-bold uppercase tracking-wider hover:underline"
        >
          Get an invite <ArrowRight className="ml-4 h-4 w-4" />
        </Link>
      </div>
      <div className="col-span-4 ">
        <Image
          src="/heroImagePage2.jpg"
          alt="Photographer standing on a wooden dock overlooking a lake at dusk"
          className="object-cover w-full"
          width={200}
          height={200}
        />
      </div>
      <div className="col-span-4  ">
     
      </div>

      <div className="flex flex-col col-span-2 justify-center bg-white px-6 py-16 text-black md:px-16 md:py-24 lg:py-32">
        <h2 className="mb-6 text-2xl font-bold uppercase tracking-wide md:text-4xl lg:text-5xl">
          Beautiful stories every time
        </h2>
        <p className="mb-8 text-sm text-gray-600 md:text-base">
          We provide design templates to ensure your stories look terrific.
          Easily add photos, text, embed maps and media from other networks.
          Then share your story with everyone.
        </p>
        <Link
          href="#"
          className="flex items-center text-sm font-bold uppercase tracking-wider text-black hover:underline"
        >
          View the stories <ArrowRight className="ml-4 h-4 w-4" />
        </Link>
      </div>

      <div className="flex flex-col col-span-2 h-[600px] justify-center bg-white px-6 py-16 text-black md:px-16 md:py-24 lg:py-32">
        <h2 className="mb-6 text-2xl font-bold uppercase tracking-wide md:text-4xl lg:text-5xl">
          Designed for everyone
        </h2>
        <p className="mb-8 text-sm text-gray-600 md:text-base">
          Photosnap can help you create stories that resonate with your
          audience. Our tool is designed for photographers of all levels,
          brands, businesses you name it.
        </p>
        <Link
          href="#"
          className="flex items-center text-sm font-bold uppercase tracking-wider text-black hover:underline"
        >
          View the stories <ArrowRight className="ml-4 h-4 w-4" />
        </Link>
      </div>
      <div className="col-span-4  ">
        <Image
          src="/HeroPhotographe.jpg"
          alt="Laptop displaying photo editing software on a desk"
          className="object-cover w-full"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
};

