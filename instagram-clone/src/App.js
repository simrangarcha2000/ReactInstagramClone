import React, { useState, useEffect } from 'react';
import './App.css';
import Posts from './Posts';
import ImageUpload from './ImageUpload';
import { db, auth } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';


function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  /** Creating useState to pass values to props dynamically  */
  const [posts, setPosts] = useState([]);
  const [open, setOpen ] = useState(false);
  const [username, setUsername ] = useState('');
  const [password, setPassword ] = useState('');
  const [email, setEmail ] = useState('');
  const [user, setUser ] = useState(null);
  const [openSignIn, setOpenSignIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=> {
      if(authUser){
        //user logged in 
        console.log(authUser);
        setUser(authUser);

      } else {
        //user logged out
        setUser(null);
      }
    })

    return () => {
      //perform some clean up before refiring 
      unsubscribe();
    }

  },[ user, username]);

  //UseEffect  -> Runs a piece of code based on a condition

  useEffect(() => {
    //This is where the code runs
    //posts is the name of the collection in firebase 

      //everytime a post is added fire this code again
      //From the snapshot get the docs in firebase map through everything get each doc
      //Creating an object so that each post has its unique id
      db.collection('posts')
      .onSnapshot((snapshot) => 
      setPosts(snapshot.docs.map((doc) => ({
        id: doc.id, //Document id 
        post: doc.data() // Data from the document 
      })))
    );
  },[]);//run every time a post changes if no value run it ones

  const signUp = (event) => {
    event.preventDefault(); //To avoid refreshing the page

    //Create the user with the input password and email, from the useState
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      return authUser.user.updateProfile({
        displayName: username
      })
    })
    .catch((error) => alert(error.message)) //In case there is an error catch it and display an error message

    setOpen(false)
    /**To close the modal once signed up */
  }

  const signIn = (event) => {
    event.preventDefault();

    auth
    .signInWithEmailAndPassword(email, password)
    .then((authUser) => {
      return authUser.user.updateProfile({
        displayName: username
      })
    })
    .catch((error) => alert(error.message)) 

    setOpenSignIn(false) 
    /**To close the modal once signed in */

  }

  return (
    <div className="app">
      {user?.displayName ? (
        <ImageUpload username = {user.displayName}/>
      ): (
        <h3>Log In to Upload</h3>
      )}
      



      <Modal open={open} onClose={() => setOpen(false)}>
    <div style={modalStyle} className={classes.paper}>
      <form className="app__signup">
      <center>
        <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="Instagram logo"
        />
        <Input placeholder="username" type="text" value={username} onChange ={(e) => setUsername(e.target.value)}></Input>
        <Input placeholder="email" type="text" value={email} onChange ={(e) => setEmail(e.target.value)}></Input>
        <Input placeholder="password" type="password" value={password} onChange = {(e) => setPassword(e.target.value)}></Input>

        
        <Button onClick={signUp}>Sign Up</Button>

      </center>
      </form>
    </div>
      </Modal>
      {/**Modal for Log In */}
      <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
    <div style={modalStyle} className={classes.paper}>
      <form className="app__signup">
      <center>
        <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="Instagram logo"
        />
        <Input placeholder="email" type="text" value={email} onChange ={(e) => setEmail(e.target.value)}></Input>
        <Input placeholder="password" type="password" value={password} onChange = {(e) => setPassword(e.target.value)}></Input>

        
        <Button type="submit" onClick={signIn}>Sign In</Button>

      </center>
      </form>
    </div>
      </Modal>


      <div className="app__header">
        <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="Instagram logo"
          />
      </div>
      {/**Control Space after choosing at the end of the button will do auto import  */}
      {/**If and or statement  */}
      {/** if there is a user then show the logout  button or else show the sign up button */}
      { user ? (
        <Button onClick = {() => auth.signOut()}>Log Out</Button>
      ): (
        <div className ="app__loginContainer">
          <Button onClick = {() => setOpenSignIn(true)}>Sign In</Button>
          <Button onClick = {() => setOpen(true)}>Sign Up</Button>
        </div>
      )}
      

      <h1>Ciao !! mami</h1>
      {/**looping through the useState function to get the values  */}
      {
        posts.map( ({id , post}) => (
          <Posts key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
      


    </div>
  );
}

export default App;