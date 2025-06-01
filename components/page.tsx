import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";

export default function Page({ blok }: any) {
  console.log()
  return (
    <main
      className="w-full grid grid-cols-1 md:grid-cols-6"
      {...storyblokEditable(blok)}
    >
      {blok.body.map((nestedBlok: any) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
