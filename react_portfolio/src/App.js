import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
// import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
       <Navbar />
       <Home />
        <About />
        <Portfolio />
        <Experience />
        <ContactForm />
       <SocialLinks />
    </div>
  );
}

export default App;
