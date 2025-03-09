import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";
import './Meals.css'

const Meals = () => {
    const {meals} = useLoaderData();
    console.log(meals);
    return (
        <div>
            <div>
                <h3>Meals : {meals?.length}</h3>
                <div className="meals">
                {
                    meals.map((meal, idx) => <Meal key={meal.idMeal} meal={meal} idx={idx}></Meal>)
                }
                </div>
            </div>
        </div>
    );
};

export default Meals;