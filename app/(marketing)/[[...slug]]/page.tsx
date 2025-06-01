import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { Feature } from "../_components/feature";
import { StoryGallery } from "../_components/story-gallery";

type Params = Promise<{ slug?: string[] }>;

export default async function Home({ params }: { params: Params }) {
  const slug = (await params).slug;
  const fullSlug = slug ? slug.join("/") : "/hero";
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${fullSlug}`, {
    version: "draft",
  });
  console.log("rendering data:", data);
  return (
    <div className="w-full">
      <div className="w-full">
        <StoryblokStory story={data.story} />
      </div>
      <StoryGallery />
      <Feature />
    </div>
  );
}


