import './App.css';
import About from './components/About';
import BarNav from './components/BarNav';
import Conctact from './components/Contact';
import Home from './components/Home';
import Project from './components/Project';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
        <BarNav/>
        <Home id="home"/>
        <About id="about"/>
        <Skills id="skills"/>
        <Project id="projects"/>
        <Conctact id="contact"/>
    </div>
  );
}

export default App;
