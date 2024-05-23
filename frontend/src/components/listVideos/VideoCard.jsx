import React from 'react'
import './VideoCard.css'

const VideoCard = ({ item }) => {
    const { title, description, thumbnail, video } = item
    return (
        <div className='card card-width'>
            <img src={thumbnail} className="card-img-top" alt="Imagen de ejemplo" />
            <div className='card-body'>
                <h5 className="card-title text-ellipsis">{title}</h5>
                <p className="card-text text-ellipsis">{description}</p>
            </div>
        </div>
    )
}

export default VideoCard