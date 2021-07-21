import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

// TODO: easter egg: do a piano with only f working
const NotFoundPage = ({ data, location }) => {
  const [fCount, setCount] = React.useState(0);
  const siteTitle = data.site.siteMetadata.title;
  const onClick = (e) => {
    if (fCount > 404) return;
    setCount(fCount + 1);
  };

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <button onClick={onClick} value={fCount}>
        f
      </button>
      <p>{fCount}</p>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
