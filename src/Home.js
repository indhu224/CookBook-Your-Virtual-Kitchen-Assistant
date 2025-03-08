import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import recipes from "./recipesData";
import "./App.css";

const Home = () => {
    const [search, setSearch] = useState("");

    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1>CookBook</h1>
            <input
                type="text"
                placeholder="Search for a recipe..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="recipe-container">
                {filteredRecipes.map(recipe => (
                    <div key={recipe.id} className="recipe-card">
                        <img src={recipe.image} alt={recipe.name} />
                        <h3>{recipe.name}</h3>
                        <Link to={`/recipe/${recipe.id}`}>View Recipe
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;