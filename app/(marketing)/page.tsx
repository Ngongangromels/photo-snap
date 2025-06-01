import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { Feature } from "./_components/feature";
import { StoryGallery } from "./_components/story-gallery";

export default async function Home() {
  const { data } = await fetchData();
console.log(data)
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

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/hero`, { version: "draft" });
}
