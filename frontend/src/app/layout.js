import "./globals.css";
import "./utilities.css";
import { APP_CONSTANTS } from "@/utils/constants/app-constants";
import Header from "@/components/layout/Header";
import ApiProvider from "@/context/ApiProvider";

export const metadata = {
  title: {
    template: `%s | ${APP_CONSTANTS.APP_NAME}`,
    default: `${APP_CONSTANTS.APP_NAME}`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex-column-relative center w-100">
        <Header />
        <main
          className="flex-column-relative w-100"
          style={{
            marginTop: `${APP_CONSTANTS.DIMENSIONS.HEADER.HEIGHT}px`,
          }}
        >
          <ApiProvider>{children}</ApiProvider>
        </main>
      </body>
    </html>
  );
}
