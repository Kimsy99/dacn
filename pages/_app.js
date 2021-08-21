import Navbar from "../components/Navbar.component";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Footer from "../components/FooterNew.component";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} className="max-w-screen-xl mx-auto" />
      <Footer />
    </>
  );
}

export default MyApp;
