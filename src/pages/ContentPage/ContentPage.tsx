import { useNavigate, useParams } from "react-router";
import { usePage } from "../../storyblok/usePage";
import { Page } from "../../components/storyblok/Page";

export const ContentPage = () => {
  const navigate = useNavigate();
  const { "*": slug } = useParams();
  const { isLoading, story } = usePage(slug);

  if (isLoading) {
    return "Loading...";
  } else if (!story?.content) {
    navigate("/error-404");
    return;
  }

  return (
    <>
      <title>{story.name} | Banking dashboard app</title>

      <Page {...story.content} />
    </>
  );
};
