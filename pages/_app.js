import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import "../styles.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="app-container">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
