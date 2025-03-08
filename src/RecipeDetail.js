import React from "react";
import { useParams } from "react-router-dom";
import recipes from "./recipesData"; // Import the recipe data

const RecipeDetail = () => {
    const { id } = useParams(); // Get recipe ID from URL
    const recipe = recipes.find(r => r.id.toString() === id); // Ensure correct ID comparison

    if (!recipe) {
        return <h2>Recipe Not Found</h2>; // If no recipe is found, show an error message
    }

    return (
        <div>
            <h1>{recipe.name}</h1>
            <img src={recipe.image} alt={recipe.name} />
            <p>{recipe.description}</p>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
        </div>
    );
};

export default RecipeDetail;