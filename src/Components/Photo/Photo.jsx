import React from 'react';
import './Photo.css'

const Photo = ({ photo }) => {
    const { id, title, url } = photo;
    return (
        <div className='photo'>
            <h2>Photo Id: {id}</h2>
            <p>Title: {title}</p>
            <p>Img Url: {url}</p>
        </div>
    );
};

export default Photo;