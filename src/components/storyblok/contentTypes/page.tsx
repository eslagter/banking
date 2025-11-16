import { Blok } from "../Blok";

interface ComponentProps {
  component: string;
  name: string;
  _uid: string;
}

interface PageProps {
  component: "page";

  body: Array<ComponentProps>;

  _uid: string;
  _editable: string;
}

const Page = (props: PageProps) => {
  if (!props.body) {
    return null;
  }

  return (
    <div style={{ height: "200vh" }}>
      {props.body.map((component) => (
        <Blok key={component["_uid"]} blok={component} />
      ))}
    </div>
  );
};

export default Page;
