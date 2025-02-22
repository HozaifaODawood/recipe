import { useState, useEffect } from 'react'
import './HomeStyle.scss'
import axios from 'axios'
import Fuse from "fuse.js";
import noPage from '../../assets/noPage.jpg'
import { AiOutlineGlobal } from "react-icons/ai";
import { Navigate, useNavigate } from 'react-router-dom';

export default function Home() {
    const [recipes, setRecipes] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const navigate = useNavigate()


    async function getRecipes() {
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            setRecipes(response.data.meals)
        } catch (error) {
            return error.message
        }
    }

    const fuseOptions = {
        keys: ["strMeal"],
        threshold: 0.3,
    }

    useEffect(() => {
        getRecipes()
    }, [])

    useEffect(() => {
        const fuse = new Fuse(recipes, fuseOptions)
        if (searchTerm) {
            const results = fuse.search(searchTerm)
            setSearchResults(results.map((result) => result.item))
        } else {
            setSearchResults(recipes)
        }
    }, [searchTerm, recipes])

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value)
    }


    const handleViewRecipe = (idMeal) => {
        navigate(`/details/${idMeal}`)
    }


    return (
        <>
            <div className="homeContainer">
                <div className='mainHeader'>
                    <h2 className='homeHeader'>Welcome to the best food recipe WebSite</h2>
                </div>
                <div className="w-full pb-5 text-center">
                    <input
                        type="text"
                        placeholder="Search recipes..."
                        value={searchTerm}
                        onChange={handleSearchInputChange}
                        className="border rounded px-60 py-2"
                    />
                    {searchTerm && searchResults.length === 0 && (
                        <p>No recipes found matching {searchTerm}</p>
                    )}
                </div>
                <div className="mealsContent">
                    <div className="allCards">
                        {searchTerm && (
                            <>
                                {searchResults.map((recipe) => (
                                    <div key={recipe.idMeal} className="mealCard">
                                        <img src={recipe.strMealThumb ? recipe.strMealThumb : noPage} alt={recipe.strMeal} />
                                        <h3>{recipe.strMeal}</h3>
                                        <span><AiOutlineGlobal className='globalIcon' /> {recipe.strArea}</span>
                                        <button onClick={() => handleViewRecipe(recipe.idMeal)}>View Recipe</button>
                                    </div>
                                ))}
                            </>
                        )}
                        {!searchTerm && (
                            <>
                                {recipes.map((recipe) => (
                                    <div key={recipe.idMeal} className="mealCard">
                                        <img src={recipe.strMealThumb ? recipe.strMealThumb : noPage} alt={recipe.strMeal} />
                                        <h3>{recipe.strMeal}</h3>
                                        <span><AiOutlineGlobal className='globalIcon' /> {recipe.strArea}</span>
                                        <button onClick={() => handleViewRecipe(recipe.idMeal)}>View Recipe</button>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
