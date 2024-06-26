import React from "react";
import { useLoaderData, Link, Navigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/MealPage";

const singleMealUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleMealUrl}${id}`);
  return { id, data };
};
const Meal = () => {
  const { id, data } = useLoaderData();
  const singleMeal = data.meals[0];
  if (!data) return <Navigate to="/" />;
  const {
    strMeal: name,
    strMealThumb: image,
    strCategory: category,
    strArea: country,
    strInstructions: instructions,
  } = singleMeal;

  const validIngredients = Object.keys(singleMeal)
    .filter((key) => key.startsWith("strIngredient") && singleMeal[key])
    .map((key) => singleMeal[key]);
  console.log(validIngredients);
  return (
    <Wrapper>
      <header>
        <Link to="/" className="back-button">
          Back Home
        </Link>
        <h2>{name}</h2>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">Area:</span>
            {country}
          </p>
          <p>
            <span className="drink-data">Ingredients:</span>
            {/* {validIngredients.map((item, index) => {
              return (
                <span className="ing" key={item}>
                  {item}
                  {index < validIngredients.length - 1 ? "," : ""}
                </span>
              );
            })} */}
            <div className="desc">{validIngredients.join(",")}</div>
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            <div className="desc">{instructions}</div>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Meal;
