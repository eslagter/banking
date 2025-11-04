import { useLocation } from "react-router";

export const ContentPage = () => {
  const nav = useLocation();
  return (
    <div>
      <h1>Hi from {nav.pathname} </h1>
      <pre>{JSON.stringify(nav, null, 2)}</pre>
    </div>
  );
};
