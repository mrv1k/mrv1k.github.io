import * as React from "react";
import Seo from "../components/seo";
import mrv1k_pic from "../images/mrv1k-pic-large.jpg";
import "./portfolio.css";

const cheese_lorem = `Fromage frais croque monsieur stinking bishop. Cheeseburger chalk and cheese bocconcini ricotta bocconcini squirty cheese monterey jack cheesy grin. Paneer cheese strings rubber cheese taleggio gouda macaroni cheese ricotta port-salut. Rubber cheese fromage frais swiss paneer stinking bishop the big cheese smelly cheese bocconcini. Airedale.`;

const PortfolioPage = () => {
  const title = "Viktor Khotimchenko Portfolio";

  return (
    <main>
      <Seo title={title} />
      <section className="about">
        <div>1 {cheese_lorem}</div>
      </section>
      <img
        className="image-of-me"
        src={mrv1k_pic}
        alt="unoptimized img of me"
      />
      <section className="skills">
        <div>2 {cheese_lorem}</div>
      </section>
      <section className="projects">
        <div>3 {cheese_lorem}</div>
      </section>
      <section className="experience">
        <div>4 {cheese_lorem}</div>
      </section>
      <section className="contact">
        <div>5 {cheese_lorem}</div>
      </section>
    </main>
  );
};

export default PortfolioPage;
