import { APP_CONSTANTS } from "@/utils/constants/app-constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX, useState } from "react";

interface NavLinkProps {
    endPoint: string;
}

interface SvgHomeProps extends React.SVGProps<SVGSVGElement> {}

const SvgHome = (props: SvgHomeProps): JSX.Element => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            {...props}
        >
            <path
                d={
                    "M341.8 72.6c-12.3-11.4-31.3-11.4-43.5 " +
                    "0l-224 208c-9.6 9-12.8 22.9-8 35.1C71.1 " +
                    "327.9 82.8 336 96 336h16v176c0 35.3 28.7 " +
                    "64 64 64h288c35.3 0 64-28.7 64-64V336h16c13.2 " +
                    "0 25-8.1 29.8-20.3 4.8-12.2 1.6-26.2-8-35.1l-" +
                    "224-208zM304 384h32c26.5 0 48 21.5 48 " +
                    "48v96H256v-96c0-26.5 21.5-48 48-48z"
                }
            />
        </svg>
    );
};

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
                    <SvgHome
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
