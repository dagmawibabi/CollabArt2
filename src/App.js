import './App.css';
import { ArtGrid } from './components/ArtGrid';
import { Header } from './components/header';
import { Footer } from './components/footer';
import {useState} from 'react'
import { About } from './components/About';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  function switchDarkMode() {
    setDarkMode(!darkMode);
  }
  return (
    <div className="App" style={{backgroundColor: darkMode ? "#202020" : "whitesmoke" } }> 
      <Header darkMode={darkMode} switchDarkMode={switchDarkMode} />
      <About content={1} />
      <ArtGrid />
      <About content={2} />
      <About content={3} />
      <About content={4} />
      <Footer />
    </div>
  );
}

export default App;
