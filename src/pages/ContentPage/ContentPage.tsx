import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { fetchBySlug } from "../../storyblok/fetchBySlug";

export const ContentPage = () => {
  const { "*": slug } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryFn: () => fetchBySlug(slug || "home"),
    queryKey: ["story", `story-${slug}`],
    select: (response) => response?.story,
  });

  if (isLoading) {
    return "Loading...";
  } else if (!data?.content) {
    navigate("/error-404");
  }

  return (
    <>
      <meta name="keywords" content={data.name} />

      <div>
        <h1>Hi from {data.name}</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  );
};
