import { APP_CONSTANTS } from "@/utils/constants/app-constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX, useState } from "react";
import HomeIcon from "../icons/svg/HomeIcon";

interface NavLinkProps {
    endPoint: string;
}

const NavLink = ({ endPoint }: NavLinkProps): JSX.Element => {
    const [hovered, setHovered] = useState<boolean>(false);
    const pathname = usePathname();
    const isCurrentPage = endPoint && pathname.startsWith(`/${endPoint}`);

    return (
        <li className="flex-row-relative mr-8 h-5">
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
                {/* ❕ Capitalize first letter */}
                {endPoint === "" ? (
                    <HomeIcon
                        width="24"
                        height="24"
                        fill={
                            hovered || isCurrentPage ? "#ffffff" : "#686f72ff"
                        }
                    />
                ) : (
                    endPoint.charAt(0).toUpperCase() + endPoint.slice(1)
                )}
            </Link>
        </li>
    );
};

const Links = (): JSX.Element => {
    const pathname = usePathname();

    return (
        <ul className="flex-row-relative justify-end w-full pr-8">
            {pathname !== "/" ? <NavLink endPoint="" /> : null}
            <NavLink endPoint="about" />
            <NavLink endPoint="contact" />
        </ul>
    );
};

const NavBar = () => {
    const height = APP_CONSTANTS.DIMENSIONS.NAVBAR.HEIGHT;

    return (
        <nav
            className={
                "flex-column-absolute right-0 bottom-0 " +
                "text-center center w-2/5"
            }
            style={{
                height: `${height}px`,
            }}
        >
            <Links />
        </nav>
    );
};

export default NavBar;
