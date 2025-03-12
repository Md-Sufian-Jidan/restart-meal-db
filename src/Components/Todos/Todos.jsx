import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Todos = () => {
    const todos = useLoaderData();

    return (
        <div>
            <h2>Todos: {todos.length}</h2>
        </div>
    );
};

export default Todos;