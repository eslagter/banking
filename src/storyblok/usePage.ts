import { useQuery } from "@tanstack/react-query";
import { fetchBySlug } from "./fetchBySlug";
import { fetchAllLinks } from "./fetchAllLinks";
import type { Link, Story } from "./types";

type Props = {
  story: Story | undefined;
  links: Link[] | undefined;
  isLoading: boolean;
};

export const usePage = (slug: string | undefined): Props => {
  const { data: story, isLoading: isStoryLoading } = useQuery({
    queryFn: () => fetchBySlug(slug || "home"),
    queryKey: ["story", `story-${slug}`],
    select: (response) => response?.story,
  });

  const { data: links, isLoading: isLinksLoading } = useQuery({
    queryFn: () => fetchAllLinks(),
    queryKey: ["links"],
    select: (response) => {
      const links = Object.values(response.links);

      // sort links by position (reflects order in Storyblok admin UI)
      links.sort((a, b) => b.position - a.position);

      return links;
    },
  });

  return {
    story,
    links,

    isLoading: isStoryLoading || isLinksLoading,
  };
};
