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
      <script src="https://cdn.commento.io/js/commento.js"></script>
    </Head>

    <Header />

    <div>{props.children}</div>

    <Footer />
  </div>
);

export default Layout;
