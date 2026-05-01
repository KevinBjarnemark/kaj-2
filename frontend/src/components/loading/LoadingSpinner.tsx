import { JSX } from "react";

interface LoadingSpinnerProps {
    children: React.ReactNode;
    isLoading?: boolean;
}
interface DotProps {
    speed: number;
}

const Dot = ({ speed }: DotProps): JSX.Element => {
    return (
        <div
            className={`flex-column-absolute w-1 h-7/12 
                rounded-full border-4 border-transparent 
                border-t-white animate-spin
            `}
            style={{
                animationDuration: `${speed}s`,
            }}
        />
    );
};

const LoadingSpinner = ({
    children,
    isLoading = true,
}: LoadingSpinnerProps): JSX.Element => {
    return (
        <>
            {children}
            {isLoading && (
                <div
                    className={`
                    flex-column-absolute inset-0 items-center
                    justify-center pointer-events-none
                `}
                >
                    {[1.5, 1.8, 2, 3, 4, 5, 6, 7].map((i, index) => (
                        <Dot key={`dot-${index}`} speed={i} />
                    ))}
                </div>
            )}
        </>
    );
};

export default LoadingSpinner;
