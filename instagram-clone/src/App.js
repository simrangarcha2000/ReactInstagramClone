import React, { useState } from 'react';
import './App.css';
import Posts from './Posts';


function App() {
  /** Creating useState to pass values to props dynamically  */
  const [posts, setPosts] = useState([
    {
      username: "cleverquazi",
      imageUrl: "https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png",
      caption: "This is it"
    },
    {
      username: "cleverquazi",
      imageUrl: "https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png",
      caption: "This is it"
    }
  ]);


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
      {/**looping through the useState function to get the values  */}
      {
        posts.map(post => (
          <Posts username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
      
      {/** Adding Post props and putting value in it  */}


    </div>
  );
}

export default App;
