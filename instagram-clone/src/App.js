import React from 'react';
import './App.css';
import Posts from './Posts';


function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="Instagram logo"
          />
      </div>
      <h1>Ciao !! mami</h1>
      
      <Posts username="cleverquazi" imageUrl="https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png" caption="This is it"/>
      <Posts/>
      <Posts/>

    </div>
  );
}

export default App;
