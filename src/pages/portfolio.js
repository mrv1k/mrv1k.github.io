import * as React from "react";
import Seo from "../components/seo";
import * as styles from "./portfolio.module.css";

const PortfolioPage = () => {
  const title = "Viktor Khotimchenko Portfolio";

  return (
    <div>
      <Seo title={title} />
      <main className={styles.sections}>
        <section className="about">
          <div className={styles.content}>about</div>
        </section>
        <section className="skills">
          <div className={styles.content}>skills</div>
        </section>
        <section className="projects">
          <div className={styles.content}>projects</div>
        </section>
        <section className="experience">
          <div className={styles.content}>experience</div>
        </section>
        <section className="contact">
          <div className={styles.content}>contact</div>
        </section>
      </main>
    </div>
  );
};

export default PortfolioPage;
