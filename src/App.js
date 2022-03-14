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
  return (
    <div className="App">
      <Header/>
      <Game/>
      <Routes>
        <Route path="/" element={<Footer/>}/>
        <Route path="contacto" element={<Contacto/>} />
        <Route path="proyectos" element={<Proyectos/>} />
        <Route path="galeria" element={<Galeria/>} />
        <Route path="oblivion" element={<Oblivion/>} />
      </Routes>
    </div>
  );
}

export default App;
