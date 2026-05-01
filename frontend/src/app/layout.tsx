import "./globals.css";
import { APP_CONSTANTS } from "@/utils/constants/app-constants";
import Header from "@/components/layout/header/Header";
import AdminProvider from "@/context/admin/AdminProvider";
import { JSX } from "react";
import Footer from "@/components/layout/footer/Footer";
import LoadingProvider from "@/context/loading/LoadingProvider";

interface RootLayoutProps {
    // ❕ `React.ReactNode` accepts anything that can be rendered
    children: React.ReactNode;
}

export const metadata = {
    title: {
        template: `%s | ${APP_CONSTANTS.APP_NAME}`,
        default: `${APP_CONSTANTS.APP_NAME}`,
    },
};

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
    return (
        <html lang="en">
            <body className="flex-column-relative center w-full">
                <LoadingProvider>
                    <Header />
                    <main
                        className={`
                        flex-column-relative w-full pb-20 
                        mt-(--header-height)
                    `}
                    >
                        <AdminProvider>{children}</AdminProvider>
                    </main>
                </LoadingProvider>
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
