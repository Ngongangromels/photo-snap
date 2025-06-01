import { storyblokEditable } from "@storyblok/react/rsc";

export default function Teaser({ blok }: any) {
  return (
    <div {...storyblokEditable(blok)}>
      <h2>{blok.headline}</h2>
    </div>
  );
}
