import * as React from "react";
import { Link } from "gatsby";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({ location, title, children, showFooter = false }) => {
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

  let footer = showFooter ? <Footer /> : null;

  return (
    <div className="global-wrapper">
      <header className="global-header">
        {header}
        <Navigation />
      </header>

      <main>{children}</main>
      {footer}
    </div>
  );
};

export default Layout;
