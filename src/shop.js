import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Shop() {
  const [recipes, setRecipes] = useState([]);
  const APP_ID = "a217691c";
  const APP_KEY = "0e355c6bd2720599b0bf3ee0e1431ac5";
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const recipes = await response.json();
    console.log(recipes.hits);
    setRecipes(recipes.hits);
  };
  let i = 0;
  let recipe_list = [];
  recipes.map((recipe) => {
    recipe_list.push(
      <p key={recipe.recipe.label}>
        <Link to={`/shop/${i}`}>{recipe.recipe.label}</Link>
      </p>
    );
    i++;
  });
  console.log(recipe_list);
  return (
    <div className="shop-page">
      <h1>Menu-page</h1>
      <h2>{recipe_list}</h2>
    </div>
  );
}

export default Shop;
