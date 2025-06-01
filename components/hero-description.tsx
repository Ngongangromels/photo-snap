import { storyblokEditable } from "@storyblok/react/rsc";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export default function HeroDescription({blok}: any){
    return (
      <div {...storyblokEditable(blok)} className=" col-span-2">
        <div
          className=" flex h-[500px] flex-col justify-center  px-6 py-16 text-black md:px-16 md:py-24 lg:py-32"
          style={{ backgroundColor: blok.color }}
        >
          <h2 className="mb-6  text-gray-600 text-2xl font-bold uppercase tracking-wide md:text-3xl lg:text-5xl">
            {blok.title}
          </h2>
          <p className="mb-4 text-sm text-gray-600 md:text-[15px]">
            {blok.description}
          </p>
          <Link
            href={blok.lien?.url}
            className="flex items-center text-sm font-bold uppercase tracking-wider  text-gray-600 hover:underline"
          >
            View the stories <ArrowRight className="ml-4 h-4 w-4" />
          </Link>
        </div>
      </div>
    );
}