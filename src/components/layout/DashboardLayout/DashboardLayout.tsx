import { NavLink, Outlet, type NavLinkProps } from "react-router";
import styles from "./DashboardLayout.module.css";
import { FaChevronDown } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";

const links: Array<NavLinkProps> = [
  {
    to: "/dashboard/",
    children: (
      <>
        <MdAccountBalance size={24} /> Dashboard
      </>
    ),
  },
  {
    to: "/dashboard/",
    children: (
      <>
        <MdAccountBalance size={24} /> Dashboard
      </>
    ),
  },
  {
    to: "/dashboard/",
    children: (
      <>
        <MdAccountBalance size={24} /> Dashboard
      </>
    ),
  },
];
export const DashboardLayout = () => {
  return (
    <div className={styles.grid}>
      <div role="navigation" aria-label="Dashboard navigation">
        {links.map((link: NavLinkProps) => {
          const { children, ...props } = link;

          return (
            <NavLink {...props}>
              {children} <FaChevronDown />
            </NavLink>
          );
        })}
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};
