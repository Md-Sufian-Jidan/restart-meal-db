import './Todo.css'
const Todo = ({ todo }) => {
    const { id, userId, title, completed } = todo
    return (
        <div>
            <div className='todo'>
                <p>ID: {id}</p>
                <h2>UserID: {userId}</h2>
                <p>Title: {title}</p>
                <p>Completed: {completed}</p>
            </div>
        </div>
    );
};

export default Todo;