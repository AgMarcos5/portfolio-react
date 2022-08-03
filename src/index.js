import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import App from './App';

ReactDOM.render(
  <HashRouter>
  <ParallaxProvider>
    <App />
  </ParallaxProvider>
  </HashRouter>,
  document.getElementById('root')
);

