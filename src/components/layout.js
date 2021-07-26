import * as React from "react";
import { Link } from "gatsby";
import Bio from "./bio";

const Layout = ({ location, title, children, hideFooter }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location?.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      // make weight black on main blog page
      <h1
        style={{ fontWeight: "var(--fontWeight-black)" }}
        className="header-link-home"
      >
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  let footer = hideFooter ? null : (
    <footer>
      <hr />
      <Bio />
    </footer>
  );

  return (
    <div className="global-wrapper">
      <header className="global-header">
        {header}

        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">blog</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>
      {footer}
    </div>
  );
};

export default Layout;
