import React from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar'

//We defined the props here that are to be used
function Posts({ username, caption, imageUrl}) {
    return (
        <div className="post">
            <div className="post__header">
            <Avatar
                className="post__avatar"
                alt='Simran'
                src="/static/image/avatar1.jpg"
            />
            <h3>{username}</h3>
            </div>

            

            <img className="post__image" src={imageUrl}/>

             {/* Props name are put here and value will be given in App.js*/}
            <h4 className="post__text"><strong>{username} </strong> {caption}</h4>
        </div>
    )
}

export default Posts
