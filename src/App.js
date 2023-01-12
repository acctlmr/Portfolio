
import './App.css';
import NavBar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import Services from './sections/services/Services';
import Skills from './sections/skills/Skills';
import About from './sections/about/About';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import Portfolio from './sections/portfolio/Portfolio';
import FAQ from './sections/Faqs/FAQs';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Services />
      <Skills />
      <About />
      <Portfolio/>
      <FAQ/>
      <Contact />
      <Footer/>
      
    </div>
  );
}

export default App;
