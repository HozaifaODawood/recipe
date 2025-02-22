import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Details.scss';
import { FaYoutube } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";



export default function RecipeDetails() {
    const { idMeal } = useParams();
    const [recipe, setRecipe] = useState(null);

    async function getRecipe() {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
            setRecipe(response.data.meals[0]);
        } catch (error) {
            return error.message;
        }
    }

    useEffect(() => {
        getRecipe();
    }, [idMeal]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div className="recipeDetails">
            <div className="mainDiv">
                <h1>{recipe.strMeal}</h1>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                <div className="buttons">
                    <button onClick={() => window.open(recipe.strYoutube, '_blank')} className='youtube'><FaYoutube /> youtube</button>
                    <button onClick={() => window.open(recipe.strSource, '_blank')} className='source'><AiOutlineGlobal /> Source</button>
                </div>
            </div>
            <div className="secondDiv">
                <p>{recipe.strInstructions}</p>
            </div>
            <div className="thirdDiv">
                <h2>Ingredients</h2>
                <div className="one">
                    <p>{recipe.strIngredient1}</p>
                    <p>{recipe.strMeasure1}</p>
                </div>
                <div className="two">
                    <p>{recipe.strIngredient2}</p>
                    <p>{recipe.strMeasure2}</p>
                </div>
                <div className="three">
                    <p>{recipe.strIngredient3}</p>
                    <p>{recipe.strMeasure3}</p>
                </div>
            </div>
        </div>
    );
}

