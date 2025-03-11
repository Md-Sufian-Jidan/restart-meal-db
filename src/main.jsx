import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Meals from './Components/Meals/Meals.jsx';
import Error from './Components/Error/Error.jsx';
import MealDetails from './Components/MealDetails/MealDetails.jsx';
import Photos from './Components/Photos/Photos.jsx';
import PhotoDetails from './Components/PhotoDetails/PhotoDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/meals',
        loader: () => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`),
        element: <Meals></Meals>
      },
      {
        path: '/meal/:strMeal',
        loader: (params) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.params.strMeal}`),
        element: <MealDetails></MealDetails>
      },
      {
        path: '/photos',
        loader: () => fetch(`https://jsonplaceholder.typicode.com/photos`),
        element: <Photos></Photos>
      },
      {
        path: '/photo/:id',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`),
        element: <PhotoDetails></PhotoDetails>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
