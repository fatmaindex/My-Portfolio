import './App.css';
import About from './componentes/About/About.jsx';
import Contact from './componentes/Contact/Contact.jsx';
import Footer from './componentes/Footer/Footer.jsx';
import Home from './componentes/Home/Home.jsx';
import Navbar from './componentes/Navbar/Navbar.jsx'
import Projects from './componentes/Projects/Projects.jsx';
import Services from './componentes/Services/Services.jsx';
import Skills from './componentes/Skills/Skills.jsx';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Services/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
