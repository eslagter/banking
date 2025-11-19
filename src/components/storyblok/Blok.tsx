import { lazy } from "react";
import type { Content } from "../../storyblok/types";

const Teaser = lazy(() => import("./bloks/Teaser"));
const Grid = lazy(() => import("./bloks/Grid"));
const Feature = lazy(() => import("./bloks/Feature"));

interface BlokProps {
  blok: Content;
}

export const Blok = ({ blok }: BlokProps) => {
  switch (blok.component) {
    case "teaser":
      return <Teaser {...blok} />;

    case "grid":
      return <Grid {...blok} />;

    case "feature": {
      return <Feature {...blok} />;
    }
  }
};
