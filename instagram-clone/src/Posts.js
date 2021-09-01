import React from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar'

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

            {/** header -> avatar + username */}

            <img className="post__image" src="https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"/>

            <h4 className="post__text"><strong>{username} </strong> {caption}</h4>
        </div>
    )
}

export default Posts
