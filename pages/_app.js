import "../styles/globals.css";
import RouteContext from "../context/RouteContext";
import { Layout, TopNav, Footer } from "../components/index";

function MyApp({ Component, pageProps }) {
  return (
    <RouteContext>
      <Layout TopNav={TopNav} Footer={Footer}>
        <Component {...pageProps} />
      </Layout>
    </RouteContext>
  );
}

export default MyApp;
