import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./App.css";

function Details(props) {
  let { id } = useParams();
  id = parseInt(id);
  const [recipes, setRecipes] = useState([]);
  const APP_ID = "a217691c";
  const APP_KEY = "0e355c6bd2720599b0bf3ee0e1431ac5";
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=${id}&to=${
        id + 1
      }`
    );
    const recipes = await response.json();
    console.log(recipes.hits);
    setRecipes(recipes.hits);
  };

  return (
    <div className="recipe-details">
      <h1>Recipe-details</h1>
      <h2>
        {recipes.map((recipe) => (
          <img src={recipe.recipe.image} alt="" />
        ))}
      </h2>
    </div>
  );
}

export default Details;
