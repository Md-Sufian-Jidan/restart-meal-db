import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
    const meal = useLoaderData();
    // console.log(meal)
    const {meals} = meal;
    // console.log(meals)
    const [mealDetails] = meals;
    console.log(mealDetails)
    const {strMeal, strArea , strInstructions , strCategory ,strSource , strYoutube} = mealDetails;
    // console.log(meals.strArea)
    const handleGoBack = () => {
        
    }
    return (
        <div>
            <h3>Details about meal</h3>
            <h2>Dish Name : {strMeal}</h2>
            <p>Country Name : {strArea}</p>
            <p>Food Category : {strCategory}</p>
            <p>Making Process : {strInstructions}</p>
            <h4>You can visit this link to know more : {strSource}</h4>
            <h4>Or you can visit the youtube link{strYoutube}</h4>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default MealDetails;