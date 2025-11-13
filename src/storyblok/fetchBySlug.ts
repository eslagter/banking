import type { Story } from "./types";

const baseUrl = import.meta.env.VITE_STORY_BLOCK_BASE_URL!;
const token = import.meta.env.VITE_STORY_BLOCK_TOKEN;
const version = import.meta.env.PROD ? "published" : "draft";

interface ApiResponse {
  story: Story;
}

export const fetchBySlug = (slug: string): Promise<ApiResponse> => {
  const params = new URLSearchParams({
    token,
    version,
  });

  return fetch(`${baseUrl}/stories/${slug}?${params}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Can not fetch story from storyblock " + slug);
    })
    .catch(() => {
      console.error(`${slug} page not found`);
      return null;
    });
};
