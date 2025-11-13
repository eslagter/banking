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
      <meta name="keywords" content={story.name} />

      <div>
        <h1>{story.name}</h1>

        <Page {...story.content} />
      </div>
    </>
  );
};
