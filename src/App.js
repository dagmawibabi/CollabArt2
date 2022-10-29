import './App.css';
import { ArtGrid } from './components/ArtGrid';
import { Header } from './components/header';
import { Footer } from './components/footer';
import {useState} from 'react'
import { About } from './components/About';

let darkModeBGIndex = 0;
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [smallGrid, setSmallGrid] = useState(false);
  const [magnifyOnHover, setMagnifyOnHover] = useState(true);
  const [highQualityImages, setHighQualityImages] = useState(false);
  const [showArtistDetail, setShowArtistDetail] = useState(true);

  // let darkModeBGs = ["#fafafa", "#e4e5f1", "#d2d3db"]
  function switchDarkMode() {
    setDarkMode(!darkMode);
    darkModeBGIndex++;
    if(darkModeBGIndex > 3){
      darkModeBGIndex = 0;
    }

  }
  // Controls
  // Small Grid
  function changeGridSize(){
    setSmallGrid(!smallGrid);
  }
  // Magnify on Hover
  function changeMagnifyOnHover(){
    setMagnifyOnHover(!magnifyOnHover);
  }
  // High Quality Images
  function changeHighQualityImages(){
    setHighQualityImages(!highQualityImages);
  }
  // Artist Detail
  function changeShowArtistDetail(){
    setShowArtistDetail(!showArtistDetail);
  }

  return (
    <div className="App" style={{backgroundColor: darkMode ? "#202020" : "white" } }> 
      <Header darkMode={darkMode} switchDarkMode={switchDarkMode} />
      <About 
        content={1} 
        darkMode={darkMode}
        smallGrid={smallGrid} changeGridSize={changeGridSize} 
        showArtistDetail={showArtistDetail} changeShowArtistDetail={changeShowArtistDetail}
        highQualityImages={highQualityImages} changeHighQualityImages={changeHighQualityImages}        
        magnifyOnHover={magnifyOnHover} changeMagnifyOnHover={changeMagnifyOnHover}
      />
      <ArtGrid 
        darkMode={darkMode} 
        smallGrid={smallGrid} 
        showArtistDetail={showArtistDetail} 
        highQualityImages={highQualityImages} 
        magnifyOnHover={magnifyOnHover} 
        changeMagnifyOnHover={changeMagnifyOnHover}
      />
      <About content={2} darkMode={darkMode}/>
      <About content={3} darkMode={darkMode}/>
      <About content={4} darkMode={darkMode}/>
      <About content={5} darkMode={darkMode}/>
      <Footer />
    </div>
  );
}

export default App;
