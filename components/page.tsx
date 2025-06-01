import {
  SbBlokData,
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";
interface SbPageData extends SbBlokData {
  body: SbBlokData[];
}

interface PageProps {
  blok: SbPageData;
}

export default function Page({ blok }: PageProps) {
  return (
    <main
      className="w-full mt-4 grid grid-cols-1 md:grid-cols-6"
      {...storyblokEditable(blok)}
    >
      {blok.body.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
