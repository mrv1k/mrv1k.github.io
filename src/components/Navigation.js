import * as React from "react";
import { Link } from "gatsby";

const Navigation = () => {
  return (
    <nav class="navigation">
      <ul>
        <li>
          <Link to="/">blog</Link>
        </li>
        <li>
          <Link to="/portfolio">portfolio</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
