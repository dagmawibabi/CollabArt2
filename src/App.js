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
  const [showArtistDetail, setShowArtistDetail] = useState(true);
  const [highQualityImages, setHighQualityImages] = useState(false);
    let darkModeBGs = ["#fafafa", "#e4e5f1", "#d2d3db"]
  function switchDarkMode() {
    setDarkMode(!darkMode);
    darkModeBGIndex++;
    if(darkModeBGIndex > darkModeBGs.length){
      darkModeBGIndex = 0;
    }

  }
  // Controls
  // Small Grid
  function changeGridSize(){
    setSmallGrid(!smallGrid);
  }
  // Artist Detail
  function changeShowArtistDetail(){
    setShowArtistDetail(!showArtistDetail);
  }
  // High Quality Images
  function changeHighQualityImages(){
    setHighQualityImages(!highQualityImages);
  }

  return (
    <div className="App" style={{backgroundColor: darkMode ? "#202020" : "#fafafa" } }> 
      <Header darkMode={darkMode} switchDarkMode={switchDarkMode} />
      <About 
        content={1} 
        darkMode={darkMode}
        smallGrid={smallGrid} changeGridSize={changeGridSize} 
        showArtistDetail={showArtistDetail} changeShowArtistDetail={changeShowArtistDetail}
        highQualityImages={highQualityImages} changeHighQualityImages={changeHighQualityImages}
        
      />
      <ArtGrid darkMode={darkMode} smallGrid={smallGrid} showArtistDetail={showArtistDetail} highQualityImages={highQualityImages} />
      <About content={2} darkMode={darkMode}/>
      <About content={3} darkMode={darkMode}/>
      <About content={4} darkMode={darkMode}/>
      <About content={5} darkMode={darkMode}/>
      <Footer />
    </div>
  );
}

export default App;
