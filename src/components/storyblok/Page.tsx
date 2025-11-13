import { lazy, Suspense, useEffect, useState, type ReactNode } from "react";
import type { Content } from "../../storyblok/types";

const loadView = (contentType: string) =>
  lazy(() =>
    import(`./contentTypes/${contentType}.tsx`).catch(
      () => import("./contentTypes/debugContentType.js"),
    ),
  );

// TODO implement a loader?
const Loader = () => null;

export const Page = (props: Content) => {
  const [view, setView] = useState<ReactNode | null>(null);

  useEffect(() => {
    const load = async () => {
      const View = loadView(props.component);
      setView(<View {...props} />);
    };

    load();
  }, [props]);

  return <Suspense fallback={<Loader />}>{view}</Suspense>;
};
