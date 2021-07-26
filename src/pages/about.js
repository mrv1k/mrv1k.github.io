import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  const title = "About";

  return (
    <Layout title={title}>
      <div className="about-page">
        <Seo title={`${title} Viktor Khotimchenko`} />
        <section className="about">
          <p>
            I love programming. Prove it? Here's a picture of me after a full
            day of work!
          </p>

          <StaticImage
            className="image-of-me"
            layout="fullWidth"
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/profile-big.jpg"
            width={256}
            height={256}
            quality={90}
            alt="Viktor Khotimchenko profile picture"
          />

          <p>
            Alas, I wasn't always as happy and as determined with my career.
          </p>

          <p>
            After I graduated Fanshawe college in 2015 I struggled to find a
            developer job. Soon after, I run out of money and had to get any
            job. I felt defeated and stopped programming.
          </p>
          <p>
            I went like that till 2017 when having a job stopped being enough. I
            had to pursue a career. I tried to find an activity that I would
            enjoy as much programming. I couldn't. So I returned to programming,
            really learned JavaScript and was hired by a local e-commerce
            startup in 2018.
          </p>
          <p>
            There, I was a sole developer responsible for all customer facing
            websites. I developed a Node.js build system that unified a
            codebase, improved performance and enabled A/B testing. I also
            developed a Vue.js components library that dramatically sped up
            design to deployment cycle.
          </p>

          <p>
            Now, I'm looking for new challenges to push my limits and hone my
            craft as an engineer.
          </p>
        </section>
      </div>

      <aside className="links">
        Projects are up on{" "}
        <a
          href="https://github.com/mrv1k"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          GitHub
        </a>
        <br />
        Social network of choice is{" "}
        <a
          href="https://www.linkedin.com/in/vkhotimchenko/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          LinkedIn
        </a>
        <br />
        For direct contact{" "}
        <a href="mailto:viktorkhotimchenko@gmail.com">
          viktorkhotimchenko@gmail.com
        </a>
      </aside>
    </Layout>
  );
};

export default AboutPage;
