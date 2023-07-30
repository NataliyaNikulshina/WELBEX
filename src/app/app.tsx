import React from 'react';
import styleApp from './app.module.css';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';

function App() {
  return (
    <div className={`${styleApp.App}`}>
      <Header />
      <Main />
      <Footer /> 
    </div>
  );
}

export default App;
