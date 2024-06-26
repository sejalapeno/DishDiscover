import React from "react";
import Wrapper from "../assets/wrappers/MealList";
import MealCard from "./MealCard";

const MealList = ({ meals }) => {
  if (!meals) {
    return <h4 style={{ textAlign: "center" }}>No matching meal found...</h4>;
  }

  const formattedMeals = meals.map((item) => {
    const {
      idMeal,
      strMeal,
      strCategory,
      strInstructions,
      strMealThumb,
      strArea,
    } = item;

    return {
      id: idMeal,
      name: strMeal,
      category: strCategory,
      country: strArea,
      instructions: strInstructions,
      image: strMealThumb,
    };
  });
  return (
    <Wrapper>
      {formattedMeals.map((item) => {
        return <MealCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

export default MealList;
