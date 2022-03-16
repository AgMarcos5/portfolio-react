import { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Galeria from './components/Galeria';
import Game from './components/Game';
import Header from './components/Header';
import Oblivion from './components/Oblivion';
import Proyectos from './components/Proyectos';


function App() {
  const refScroll = useRef(null)
  const executeScroll = () => refScroll.current.scrollIntoView()    

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  
  return (
    <div className="App">
      <Header/>
      <div ref={refScroll}></div>
      <Game/>
      
      <Routes>
        <Route path="/" element={<Footer/>}/>
        <Route path="contacto" element={<Contacto executeScroll={executeScroll}/>} />
        <Route path="proyectos" element={<Proyectos executeScroll={executeScroll}/>} />
        <Route path="galeria" element={<Galeria executeScroll={executeScroll}/>} />
        <Route path="oblivion" element={<Oblivion executeScroll={executeScroll}/>} />
      </Routes>

      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <span>&#9650;</span>
        </button>
      )}

    </div>
  );
}

export default App;
