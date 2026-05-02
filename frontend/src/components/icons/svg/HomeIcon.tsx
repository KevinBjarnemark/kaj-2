import React, { JSX } from "react";

interface HomeIconProps extends React.SVGProps<SVGSVGElement> {}

const HomeIcon = (props: HomeIconProps): JSX.Element => {
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
                className="hover:fill-white"
            />
        </svg>
    );
};

export default HomeIcon;
