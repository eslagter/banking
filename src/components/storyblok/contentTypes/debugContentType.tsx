import type { Content } from "../../../storyblok/types";

const DebugContentType = (props: Content) => {
  return import.meta.env.DEV ? (
    <i>Missing content type: {props.component}</i>
  ) : null;
};
export default DebugContentType;
