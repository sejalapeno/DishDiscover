import React from "react";
import Wrapper from "../assets/wrappers/MealCard";

import { Link } from "react-router-dom";

const MealCard = ({ id, name, instructions, image, category, country }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{category}</h5>
        <p>{country}</p>
        <Link to={`/meal/${id}`} className="btn">
          Details
        </Link>
      </div>
    </Wrapper>
  );
};

export default MealCard;
