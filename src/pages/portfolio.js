import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const PortfolioPage = ({ location }) => {
  const title = "Portfolio | Viktor Khotimchenko";

  return (
    <Layout location={location} title={title}>
      <Seo title={title} />
      <div>
        <section className="about">about</section>
        <section className="skills">skills</section>
        <section className="projects">projects</section>
        <section className="experience">experience</section>
        <section className="contact">contact</section>
      </div>
    </Layout>
  );
};

export default PortfolioPage;
