import type { Link } from "./types";

const baseUrl = import.meta.env.VITE_STORY_BLOCK_BASE_URL!;
const token = import.meta.env.VITE_STORY_BLOCK_TOKEN;
const version = import.meta.env.PROD ? "published" : "draft";

export const fetchAllLinks = (): Promise<Record<string, Link>> => {
  const params = new URLSearchParams({
    token,
    version,
    // only get the first level links for the navigation
    with_parent: "0",
  });

  return fetch(`${baseUrl}/links?${params}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Can not fetch all links from storyblok");
    })
    .catch(() => {
      return {};
    });
};
