import type { Content } from "../../../storyblok/types";

const Page = (props: Content) => <pre>{JSON.stringify(props, null, 2)}</pre>;
export default Page;
