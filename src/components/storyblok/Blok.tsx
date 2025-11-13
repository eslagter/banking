import type { Content } from "../../storyblok/types";
import { Teaser } from "./bloks/Teaser";

interface BlokProps {
  blok: Content;
}

export const Blok = ({ blok }: BlokProps) => {
  switch (blok.component) {
    case "teaser":
      return <Teaser {...blok} />;

    default:
      return null;
  }
};
