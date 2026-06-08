import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Service";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 50,
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
