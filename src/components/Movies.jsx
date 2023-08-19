import React from "react";
import "./movies.css";

const Movies = (props) => {
  return (
    <div className="movies">
      <img src={props.img} alt="" />
      <p>{props.title}</p>
      <p>Year: {props.year} </p>
    </div>
  );
};

export default Movies;
