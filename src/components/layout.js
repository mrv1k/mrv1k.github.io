import * as React from "react";
import { Link } from "gatsby";
import Footer from "./Footer";

const Layout = ({ location, title, children, showFooter = false }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;
  let footer = showFooter ? <Footer /> : null;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
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

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      {footer}
    </div>
  );
};

export default Layout;
