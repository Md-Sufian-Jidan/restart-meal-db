import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Photo from '../Photo/Photo';
import './Photos.css'

const Photos = () => {

    const photos = useLoaderData();

    return (
        <div>
            <h2>Photos: {photos.length}</h2>
            <div className='photos'>
                {
                    photos.map((photo) => <Photo key={photo.id} photo={photo}></Photo>)
                }
            </div>
        </div>
    );
};

export default Photos;