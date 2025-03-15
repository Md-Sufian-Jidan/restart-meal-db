import PropTypes from 'prop-types';
import './Comment.css'

const Comment = ({ comment }) => {
    const { id, name, body, email } = comment;

    return (
        <div className='comment'>
            <p>{id}</p>
            <h2>{name}</h2>
            <p>{body}</p>
            <p>{email}</p>
        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.object.isRequired
}
export default Comment;