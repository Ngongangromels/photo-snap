import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export const Hero = () => {
    return (
      <section className="relative h-[500px]">
        <div className="absolute inset-0">
          <Image
            src="/CoucheSoleil.jpg"
            alt="Mountains with full moon"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end p-12 max-w-md">
          <div className="text-xs text-gray-300 uppercase tracking-widest mb-4">
            Last months featured story
          </div>
          <h1 className="text-4xl text-white font-bold uppercase tracking-wide mb-4">
            Hazy Full
            <br />
            Moon of
            <br />
            Appalachia
          </h1>
          <div className="text-sm mb-1 text-gray-100">March 2nd 2020, by John Appleseed</div>
          <p className="text-sm text-gray-300 mb-6">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called mountains especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
          <Link
            href="#"
            className="flex items-center text-gray-50 text-xs uppercase tracking-widest hover:text-gray-200 transition-colors duration-300"
          >
            Read the story <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    );
}