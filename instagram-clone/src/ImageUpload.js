import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { storage, db } from './firebase';
import firebase from 'firebase';

function ImageUpload({ username }) {
    const [url, setUrl] = useState("")
    const [image, setImage] = useState (null);
    const [progress, setProgress] = useState (0);
    const [caption, setCaption] = useState ('');

    const handleChange = (e) => {
        if ( e.target.files[0]){
            setImage(e.target.files[0])
        }
    };

    const handleUpload = () => {
        //putting image that you grabbed in the folder we are creating 
        //Access the storage in firebase
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        //On listen sto what is happening 
        //Just for the visual of the the 1 to 100%
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                //Progress Function
                const progress = Math.round(
                    (snapshot.bytesTransferred/ snapshot.totalBytes) * 100
                );
                setProgress(progress)
            },
            (error) => {
                //Error Function 
                console.log(error);
                alert(error.message);
            },
            () => {
                //complete function 
                //Go and get a download link
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then ((url) =>{
                    setUrl(url);

                    //ppost image inside the db
                    db.collection("posts").add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption: caption,
                        imageUrl : url,
                        username: username
                    });

                    setProgress(0);
                    setCaption("");
                    setImage(null);
                    setUrl("")

                });

            }
        )
    }


    return(
        <div>
            {/**2: 17 min */}
            <progress value = {progress} max="100" />
            <input type="text" placeholder='Enter a caption' onChange={event => setCaption(event.target.value)} value={caption}/>
            <input type="file" onChange={handleChange} />
            <Button className="imageupload__button" onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )

}

export default ImageUpload;