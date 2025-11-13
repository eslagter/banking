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
    select: (response) =>
      Object.entries(response?.links).map((entry) => entry[1] as Link),
  });

  return {
    story,
    links,

    isLoading: isStoryLoading || isLinksLoading,
  };
};
