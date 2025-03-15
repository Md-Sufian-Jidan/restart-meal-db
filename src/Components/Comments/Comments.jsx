import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Comment from '../Comment/Comment';
import './Comments.css'

const Comments = () => {
    const comments = useLoaderData();

    return (
        <div>
            <h2>comments: {comments.length}</h2>
            <div className='display'>
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
                }
            </div>
        </div>
    );
};

export default Comments;