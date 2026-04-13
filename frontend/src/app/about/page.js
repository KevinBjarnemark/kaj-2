import { APP_CONSTANTS } from "@/utils/constants/app-constants";

export const metadata = {
  title: "About",
};

const About = () => {
  return (
    <article
      className="flex-column-relative w-100 justify-start"
      style={{
        padding: "2vh 2vw",
        minHeight: `calc(100vh - ${APP_CONSTANTS.DIMENSIONS.HEADER.HEIGHT}px)`,
      }}
    >
      <section className="flex-column-relative w-100 align-center justify-start">
        <h2 style={{ marginTop: "20px", textDecoration: "underline" }}>
          About
        </h2>
      </section>

      <section
        className="flex-column-relative w-100 start"
        style={{
          width: "96%",
        }}
      >
        <p>
          This is a experimental project for managing platforms as an admin. The
          project allows you to manage users, perform database operations, view
          logging, and use admin tools.
        </p>
      </section>
    </article>
  );
};

export default About;
