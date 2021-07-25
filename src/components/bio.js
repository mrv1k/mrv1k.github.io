/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;

  return (
    <aside className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/mrv1k-pic.jpg"
        width={56}
        height={56}
        quality={95}
        alt={author?.name}
      />
      <p style={{ maxWidth: "420px" }}>
        Blog by <Link to="/portfolio">{author?.name}</Link>. <br />A journey to
        teach myself CS.
      </p>
    </aside>
  );
};

export default Bio;
