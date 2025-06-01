import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";

export default function ImageHero({ blok }: any) {
  return (
    <div className="col-span-4" {...storyblokEditable(blok)}>
      <Image
        src={blok.image?.filename}
        alt="Photographer standing on a wooden dock overlooking a lake at dusk"
        className="object-fill w-full  h-[500px] "
        width={200}
        height={400}
      />
    </div>
  );
}
