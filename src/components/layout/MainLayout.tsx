import { NavLink, Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <div>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};
