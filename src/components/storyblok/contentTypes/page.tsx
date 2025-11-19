import type { Content } from "../../../storyblok/types";
import { Blok } from "../Blok";

interface PageProps {
  component: "page";

  body: Array<Content>;

  _uid: string;
  _editable: string;
}

const Page = (props: PageProps) => {
  if (!props.body) {
    return null;
  }
  return (
    <div>
      {props.body.map((component) => (
        <Blok key={component._uid} blok={component} />
      ))}
    </div>
  );
};

export default Page;
