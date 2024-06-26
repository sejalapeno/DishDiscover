import React from "react";
import { useRouteError } from "react-router-dom";

const SinglePageError = () => {
  const error = useRouteError;
  console.log(error);
  return <h2>Oops there is an error...</h2>;
};

export default SinglePageError;
