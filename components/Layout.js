import Head from "next/head";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = props => (
  <div className="Layout">
    <Head>
      <title>becky.codes</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>

    <Header />

    <div className="Content">{props.children}</div>

    <Footer />

    <style jsx global>{`
      * {
        box-sizing: border-box;
      }

      html,
      body,
      #__next {
        height: 100%;
        width: 100%;
      }

      body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      .Layout {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        background: blue;
      }

      .Content {
        flex: 1;
        display: flex;
        flex-direction: column;
        background: yellow;
      }
    `}</style>
  </div>
);

export default Layout;