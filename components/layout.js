import Link from "next/link";
import Head from "./head";
import Nav from "./nav";
import { Fragment } from "react";
import { string } from "prop-types";

const Layout = (props) => (//pass props to child (header) 
  <div>
    <Head
      title={props.title}
      description={props.description}
      keywords={props.keywords}
      url={props.url}
      ogImage={props.ogImage}
    />
    <Nav />
    <div className="container">
    {props.children}
    </div>
  </div>
);

Layout.propTypes = {
  title: string,
  description: string,
  keywords: string,
  url: string,
  ogImage: string,
};

export default Layout;
