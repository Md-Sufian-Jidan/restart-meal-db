import React from 'react';
import './Photo.css'
import { NavLink } from 'react-router-dom';

const Photo = ({ photo }) => {
    const { id, title } = photo;
    return (
        <div className='photo'>
            <h2>Photo Id: {id}</h2>
            <p>Title: {title}</p>
            <NavLink to={`/photo/${id}`}>
            <button>See Details</button>
            </NavLink>
        </div>
    );
};

export default Photo;