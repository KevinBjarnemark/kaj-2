import "./globals.css";
import { APP_CONSTANTS } from "@/utils/constants/app-constants";
import Header from "@/components/layout/header/Header";
import ApiProvider from "@/context/ApiProvider";
import { JSX } from "react";
import Footer from "@/components/layout/footer/Footer";

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
        <Header />
        <main
          className={`
                        flex-column-relative w-full pb-20 
                        mt-[var(--header-height)]
                    `}
        >
          <ApiProvider>{children}</ApiProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
