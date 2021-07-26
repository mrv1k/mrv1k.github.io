import * as React from "react";
import { Link } from "gatsby";
import Navigation from "./Navigation";
import Bio from "./bio";

const Layout = ({ location, title, children, hideFooter }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location?.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
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
        <Navigation />
      </header>

      <main>{children}</main>

      <div style={{ flexGrow: 1 }}>&nbsp;</div>

      {footer}
    </div>
  );
};

export default Layout;
