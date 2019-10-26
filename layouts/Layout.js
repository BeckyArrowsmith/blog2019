import "./styles.css";

import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = props => (
  <div className="Layout">
    <Head>
      <title>becky.codes</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
      <link rel="manifest" href="/static/site.webmanifest"/>
    </Head>

    <Header />

    <div>{props.children}</div>

    <Footer />
  </div>
);

export default Layout;
