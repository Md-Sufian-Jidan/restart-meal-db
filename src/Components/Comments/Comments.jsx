import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Comments = () => {
    const comments = useLoaderData();

    return (
        <div>
            <h2>comments: {comments.length}</h2>
        </div>
    );
};

export default Comments;