import Navbar from "../components/Navbar.component";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Footer from "../components/Footer.component";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
