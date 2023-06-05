import "../styles/globals.css";
import Navbar from "./component/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
