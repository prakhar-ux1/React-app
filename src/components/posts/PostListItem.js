import React from 'react'
import "../../styles/PostListItem.scss"
import sunflower from "../../img/sunflower.png"
import { Link } from 'react-router-dom'
function PostListItem({ id, title, body }) {
    return (
        <div className='item'>
            <img src={sunflower} className="App-logo"></img>
            <div className='cardContent'>
                <Link to={'/posts/' + id}>
                    <div className='cardContent-title'>{title}</div>
                </Link>
                <div className='cardContent-body'>{body}</div>
            </div>
        </div>
    )
}

export default PostListItem