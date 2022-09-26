//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Testimonial from "./components/Testimonial/Testimonial";
import Subscription from "./components/Subscription/Subscription";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Team />
      <Testimonial />
      <Subscription />
      <Footer />
      <ScrollToTop
        smooth
        color="white"
        width="20"
        height="20"
        style={{ backgroundColor: "#781C68", borderRadius: "90px" }}
      />
    </>
  );
}

export default App;
