import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX, useState } from "react";
import HomeIcon from "@/components/icons/svg/HomeIcon";

interface NavLinkProps {
  endPoint: string;
}

const NavLink = ({ endPoint }: NavLinkProps): JSX.Element => {
  const [hovered, setHovered] = useState<boolean>(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isCurrentPage = pathname.startsWith(`/${endPoint}`);

  return (
    <li className="flex-row-relative mr-4 ml-4 h-5">
      <Link
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        href={`/${endPoint}`}
        rel="noopener noreferrer"
        className="flex-column-relative center"
        style={{
          color: hovered || isCurrentPage ? "#ffffff" : "#686f72ff",
        }}
      >
        {endPoint === "" ? (
          <HomeIcon
            width="24"
            height="24"
            fill={isHomePage ? "#ffffff" : "#686f72ff"}
          />
        ) : (
          endPoint.charAt(0).toUpperCase() + endPoint.slice(1)
        )}
      </Link>
    </li>
  );
};

const Links = (): JSX.Element => {
  return (
    <ul className="flex-row-relative justify-center sm:justify-end w-full">
      <NavLink endPoint="" />
      <NavLink endPoint="about" />
      <NavLink endPoint="contact" />
    </ul>
  );
};

const NavBar = (): JSX.Element => {
  return (
    <nav
      className={`
                flex-column-absolute 
                bottom-0 
                left-1/2 -translate-x-1/2
                sm:right-0 sm:translate-x-0
                h-(--navbar-height)
                justify-center
                items-center
            `}
    >
      <Links />
    </nav>
  );
};

export default NavBar;
