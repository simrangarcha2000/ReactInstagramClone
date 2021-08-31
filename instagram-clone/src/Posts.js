import React from 'react'
import './Post.css';

function Posts() {
    return (
        <div className="post">
            <h3>username</h3>
            {/** header -> avatar + username */}

            <img className="post__image" src="https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"/>

            <h4 className="post__text"><strong>cleverquazi: </strong> wow what a day</h4>
        </div>
    )
}

export default Posts
