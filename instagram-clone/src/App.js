import React from 'react';
import './App.css';
import Posts from './Posts';
import Avatar from '@material-ui/core/Avatar'

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
      
      <Posts/>
      {/* Posts */}

      {/* Posts */}
    </div>
  );
}

export default App;
