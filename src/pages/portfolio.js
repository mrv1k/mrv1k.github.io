import * as React from "react";
import Seo from "../components/seo";
import mrv1k_pic from "../images/mrv1k-pic-large.jpg";
import "./portfolio.css";

const PortfolioPage = () => {
  const title = "Viktor Khotimchenko Portfolio";

  return (
    <main className="portfolio">
      <Seo title={title} />
      <section className="about">
        <h1 className="title">{">"} whoami</h1>
        <p>I love programming.</p>
        <p>
          After I graduated Fanshawe college in 2015 I struggled to find a
          developer job. Soon after, I run out of money and had to get any job.
          I felt defeated and stopped programming.
        </p>
        <p>
          I went like that till 2017 when having a job stopped being enough. I
          had to pursue a career. I tried to find an activity that I would enjoy
          as much programming. I couldn't. So I returned to programming, really
          learned JavaScript and was hired by a local e-commerce startup in
          2018.
        </p>
        <p>
          There, I was a sole developer responsible for all customer facing
          websites. I developed a Node.js build system that unified a codebase,
          improved performance and enabled A/B testing. I also developed a
          Vue.js components library that dramatically sped up design to
          deployment cycle.
        </p>

        <p>
          Now, I'm looking for new challenges to push my limits and hone my
          craft as an engineer.
        </p>
      </section>
      <img
        className="image-of-me"
        src={mrv1k_pic}
        alt="unoptimized img of me"
      />
      <section className="skills">
        <div>2</div>
      </section>
      <section className="projects">
        <div>3</div>
      </section>
      <section className="experience">
        <div>4</div>
      </section>
      <section className="contact">
        <div>5</div>
      </section>
    </main>
  );
};

export default PortfolioPage;
