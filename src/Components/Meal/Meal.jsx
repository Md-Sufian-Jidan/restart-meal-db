import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Meal.css'
const Meal = ({meal , idx}) => {
    const {strMeal,strArea, mealId} = meal ;
    // console.log(strMeal)
    return (
        <div>
            <div className='meal'>
            <p>{idx + 1}) Dish Name : {strMeal}</p>
            <p>{strArea}</p>
            <Link to={`/meal/${strMeal}`}>want to know more</Link>
            <Link to={`/meal/${strMeal}`}><button>click me</button></Link>
            </div>
        </div>
    );
};

Meal.propTypes = {
    meal: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
}
export default Meal;