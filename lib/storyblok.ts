
import HeroDescription from "@/components/hero-description";
import ImageHero from "@/components/hero-image";
import Page from "@/components/page";

import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_DELIVERY_API_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    image: ImageHero,
    description: HeroDescription,
  },
  apiOptions: {
    endpoint:
      "https://api.storyblok.com/v2/cdn/stories/hero?version=draft&token=f1hKyQCx6QZfN8YFH75GSwtt&cv=1748537294",
  },
});