import "./globals.css";
import "./utilities.css";

import { APP_CONSTANTS } from "@/utils/constants/app-constants";
import Header from "@/components/layout/Header";
import ApiProvider from "@/context/ApiProvider";
import { JSX } from "react";

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
          className="flex-column-relative w-full"
          style={{
            marginTop: `${APP_CONSTANTS.DIMENSIONS.HEADER.HEIGHT}px`,
          }}
        >
          <ApiProvider>{children}</ApiProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
