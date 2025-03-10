import React from 'react';

const Photo = ({ photo }) => {
    const { id, title, url } = photo;
    return (
        <div>
            <h2>Photo Id: {id}</h2>
            <p>Title: {title}</p>
        </div>
    );
};

export default Photo;