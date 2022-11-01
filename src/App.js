import './App.css';
import { ArtGrid } from './components/ArtGrid';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { useState } from 'react'
import { About } from './components/About';

let darkModeBGIndex = 0;
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [smallGrid, setSmallGrid] = useState(false);
  const [magnifyOnHover, setMagnifyOnHover] = useState(true);
  const [highQualityImages, setHighQualityImages] = useState(false);
  const [showArtistDetail, setShowArtistDetail] = useState(true);
  const [isExpanded, setExpanded] = useState(false);

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
  function changeExpand() {
      setExpanded(!isExpanded);
  }

  return (
    <div className="App" style={{backgroundColor: darkMode ? "#202020" : "white" } }> 
      {/* H E A D E R */}
      <Header darkMode={darkMode} switchDarkMode={switchDarkMode} />
      {/* A B O U T */}
      <About 
        content={1} 
        darkMode={darkMode}
        smallGrid={smallGrid} changeGridSize={changeGridSize} 
        showArtistDetail={showArtistDetail} changeShowArtistDetail={changeShowArtistDetail}
        highQualityImages={highQualityImages} changeHighQualityImages={changeHighQualityImages}        
        magnifyOnHover={magnifyOnHover} changeMagnifyOnHover={changeMagnifyOnHover}
        isExpanded={isExpanded} changeExpand={changeExpand}
      />
      {/* C O N T R O L S */}
      <About 
        content={6} 
        darkMode={darkMode}
        smallGrid={smallGrid} changeGridSize={changeGridSize} 
        showArtistDetail={showArtistDetail} changeShowArtistDetail={changeShowArtistDetail}
        highQualityImages={highQualityImages} changeHighQualityImages={changeHighQualityImages}        
        magnifyOnHover={magnifyOnHover} changeMagnifyOnHover={changeMagnifyOnHover}
        isExpanded={isExpanded} changeExpand={changeExpand}
      />
      {/* G R I D */}
      <ArtGrid 
        content={1}
        darkMode={darkMode} 
        smallGrid={smallGrid} 
        showArtistDetail={showArtistDetail} 
        highQualityImages={highQualityImages} 
        magnifyOnHover={magnifyOnHover} 
        changeMagnifyOnHover={changeMagnifyOnHover}
      />
      {/* G A L L E R Y */}
      <ArtGrid 
        content={2}
        darkMode={darkMode} 
        smallGrid={smallGrid} 
        showArtistDetail={showArtistDetail} 
        highQualityImages={highQualityImages} 
        magnifyOnHover={magnifyOnHover} 
        changeMagnifyOnHover={changeMagnifyOnHover}
      />
      {/* D O W N L O A D */}
      <About 
        content={2} 
        darkMode={darkMode}
        smallGrid={smallGrid} changeGridSize={changeGridSize} 
        showArtistDetail={showArtistDetail} changeShowArtistDetail={changeShowArtistDetail}
        highQualityImages={highQualityImages} changeHighQualityImages={changeHighQualityImages}        
        magnifyOnHover={magnifyOnHover} changeMagnifyOnHover={changeMagnifyOnHover}
        isExpanded={isExpanded} changeExpand={changeExpand}
      />
      {/* C O N T R I B U T E */}
      <About 
        content={3} 
        darkMode={darkMode}
        smallGrid={smallGrid} changeGridSize={changeGridSize} 
        showArtistDetail={showArtistDetail} changeShowArtistDetail={changeShowArtistDetail}
        highQualityImages={highQualityImages} changeHighQualityImages={changeHighQualityImages}        
        magnifyOnHover={magnifyOnHover} changeMagnifyOnHover={changeMagnifyOnHover}
        isExpanded={isExpanded} changeExpand={changeExpand}
      />
      {/* C O N T A C T */}
      <About 
        content={4} 
        darkMode={darkMode}
        smallGrid={smallGrid} changeGridSize={changeGridSize} 
        showArtistDetail={showArtistDetail} changeShowArtistDetail={changeShowArtistDetail}
        highQualityImages={highQualityImages} changeHighQualityImages={changeHighQualityImages}        
        magnifyOnHover={magnifyOnHover} changeMagnifyOnHover={changeMagnifyOnHover}
        isExpanded={isExpanded} changeExpand={changeExpand}
      />
      {/* T H A N K  Y O U  */}
      <About 
        content={5} 
        darkMode={darkMode}
        smallGrid={smallGrid} changeGridSize={changeGridSize} 
        showArtistDetail={showArtistDetail} changeShowArtistDetail={changeShowArtistDetail}
        highQualityImages={highQualityImages} changeHighQualityImages={changeHighQualityImages}        
        magnifyOnHover={magnifyOnHover} changeMagnifyOnHover={changeMagnifyOnHover}
        isExpanded={isExpanded} changeExpand={changeExpand}
      />
      {/* F O O T E R */}
      <Footer />
    </div>
  );
}

export default App;
