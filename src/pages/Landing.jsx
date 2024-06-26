import React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import MealList from "../components/MealList";
import SearchForm from "../components/SearchForm";
import styled from "styled-components";
const mealSearchUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const loader = async ({ request }) => {
  const url = new URL(request.url);

  const searchTerm = url.searchParams.get("search") || "";
  const response = await axios.get(`${mealSearchUrl}${searchTerm}`);
  return { meals: response.data.meals, searchTerm };
};

const Landing = () => {
  const { meals, searchTerm } = useLoaderData();
  console.log(meals);
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <MealList meals={meals} />
    </>
  );
};

export default Landing;
