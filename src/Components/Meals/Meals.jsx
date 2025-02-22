import { useEffect, useState } from 'react'
import './MealsStyle.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import noPage from '../../assets/noPage.jpg'
import { AiOutlineGlobal } from "react-icons/ai";

export default function Meals() {
    const [activeCategory, setActiveCategory] = useState('')
    const [recipes, setRecipes] = useState([])
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    async function getRecipes() {
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            setRecipes(response.data.meals)
        } catch (error) {
            return error.message
        }
    }

    async function getspecific(category) {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            setCategories(response.data.meals)
        } catch (error) {
            return error.message
        }
    }

    useEffect(() => {
        getRecipes()
    }, [])

    const handleViewRecipe = (idMeal) => {
        navigate(`/details/${idMeal}`)
    }

    return (
        <>
            <div className="mealsContainer">
                <div className="title">
                    <h1 className='myTitle'>Learn, Cook, Eat Your Food</h1>
                </div>
                <div className="categories">
                    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                        <li className="me-2">
                            <NavLink onClick={() => setActiveCategory('ALL')} className={`navLink inline-block ${activeCategory === 'ALL' ? 'active' : ''}`}>ALL</NavLink>
                        </li>
                        <li className="me-2">
                            <NavLink onClick={() => { setActiveCategory('Beef'); getspecific('beef') }} className={`navLink inline-block ${activeCategory === 'Beef' ? 'active' : ''}`}>Beef</NavLink>
                        </li>
                        <li className="me-2">
                            <NavLink onClick={() => { setActiveCategory('Breakfast'); getspecific('breakfast') }} className={`navLink inline-block ${activeCategory === 'Breakfast' ? 'active' : ''}`}>Breakfast</NavLink>
                        </li>
                        <li className="me-2">
                            <NavLink onClick={() => { setActiveCategory('Chicken'); getspecific('chicken') }} className={`navLink inline-block ${activeCategory === 'Chicken' ? 'active' : ''}`}>Chicken</NavLink>
                        </li>
                        <li className="me-2">
                            <NavLink onClick={() => { setActiveCategory('Dessert'); getspecific('dessert') }} className={`navLink inline-block ${activeCategory === 'Dessert' ? 'active' : ''}`}>Dessert</NavLink>
                        </li>
                        <li className="me-2">
                            <NavLink onClick={() => { setActiveCategory('Goat'); getspecific('goat') }} className={`navLink inline-block ${activeCategory === 'Goat' ? 'active' : ''}`}>Goat</NavLink>
                        </li>
                        <li className="me-2">
                        </li>
                        <li className="me-2">
                            <NavLink onClick={() => { setActiveCategory('Chicken'); getspecific('chicken') }} className={`navLink inline-block ${activeCategory === 'Chicken' ? 'active' : ''}`}>Chicken</NavLink>
                        </li>
                        <li className="me-2">
                            <NavLink onClick={() => { setActiveCategory('Dessert'); getspecific('dessert') }} className={`navLink inline-block ${activeCategory === 'Dessert' ? 'active' : ''}`}>Dessert</NavLink>
                        </li>
                        <li className="me-2">
                            <NavLink onClick={() => { setActiveCategory('Goat'); getspecific('goat') }} className={`navLink inline-block ${activeCategory === 'Goat' ? 'active' : ''}`}>Goat</NavLink>
                        </li>
                        <li className="me-2">
                            <NavLink onClick={() => { setActiveCategory('Lamb'); getspecific('lamb') }} className={`navLink inline-block ${activeCategory === 'Lamb' ? 'active' : ''}`}>Lamb</NavLink>
                        </li>
                        <li className="me-2">
                            <NavLink onClick={() => { setActiveCategory('Miscellaneous'); getspecific('miscellaneous') }} className={`navLink inline-block ${activeCategory === 'Miscellaneous' ? 'active' : ''}`}>Miscellaneous</NavLink>
                        </li>
                        <li className="me-2">
                            <NavLink onClick={() => { setActiveCategory('Pasta'); getspecific('pasta') }} className={`navLink inline-block ${activeCategory === 'Pasta' ? 'active' : ''}`}>Pasta</NavLink>
                        </li>
                        <li className="me-2">
                            <NavLink onClick={() => { setActiveCategory('Pork'); getspecific('pork') }} className={`navLink inline-block ${activeCategory === 'Pork' ? 'active' : ''}`}>Pork</NavLink>
                        </li>
                        <li className="me-2">
                            <NavLink onClick={() => { setActiveCategory('Seafood'); getspecific('seafood') }} className={`navLink inline-block ${activeCategory === 'Seafood' ? 'active' : ''}`}>Seafood</NavLink>
                        </li>
                        <li className="me-2">
                            <NavLink onClick={() => { setActiveCategory('Side'); getspecific('side') }} className={`navLink inline-block ${activeCategory === 'Side' ? 'active' : ''}`}>Side</NavLink>
                        </li>
                        <li className="me-2">
                            <NavLink onClick={() => { setActiveCategory('Starter'); getspecific('starter') }} className={`navLink inline-block ${activeCategory === 'Starter' ? 'active' : ''}`}>Starter</NavLink>
                        </li>
                        <li className="me-2">
                            <NavLink onClick={() => { setActiveCategory('Vegan'); getspecific('vegan') }} className={`navLink inline-block ${activeCategory === 'Vegan' ? 'active' : ''}`}>Vegan</NavLink>
                        </li>
                        <li className="me-2">
                            <NavLink onClick={() => { setActiveCategory('Vegetarian'); getspecific('vegetarian') }} className={`navLink inline-block ${activeCategory === 'Vegetarian' ? 'active' : ''}`}>Vegetarian</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="mealsContent">
                    <div className="allCards">
                        {activeCategory === 'ALL' && <>
                            {recipes.map((recipe) => (
                                <div key={recipe.idMeal} className="mealCard">
                                    <img src={recipe.strMealThumb ? recipe.strMealThumb : noPage} alt={recipe.strMeal} />
                                    <h3>{recipe.strMeal}</h3>
                                    <span><AiOutlineGlobal className='globalIcon' /> {recipe.strArea}</span>
                                    <button onClick={() => handleViewRecipe(recipe.idMeal)}>View Recipe</button>
                                </div>
                            ))}
                        </>}
                        {activeCategory === 'Beef' && <>
                            {
                                categories.map((recipe) => (
                                    <div key={recipe.idMeal} className="mealCard">
                                        <img src={recipe.strMealThumb ? recipe.strMealThumb : noPage} alt={recipe.strMeal} />
                                        <h3>{recipe.strMeal.split(' ').slice(0, 3).join(' ')}</h3>
                                        <span><AiOutlineGlobal className='globalIcon' /> {recipe.strArea}</span>
                                        <button onClick={() => handleViewRecipe(recipe.idMeal)}>View Recipe</button>
                                    </div>
                                ))
                            }
                        </>}



                        {activeCategory === 'Breakfast' && <>
                            {
                                categories.map((recipe) => (
                                    <div key={recipe.idMeal} className="mealCard">
                                        <img src={recipe.strMealThumb ? recipe.strMealThumb : noPage} alt={recipe.strMeal} />
                                        <h3>{recipe.strMeal.split(' ').slice(0, 3).join(' ')}</h3>
                                        <span><AiOutlineGlobal className='globalIcon' /> {recipe.strArea}</span>
                                        <button onClick={() => handleViewRecipe(recipe.idMeal)}>View Recipe</button>
                                    </div>
                                ))
                            }
                        </>}

                        {activeCategory === 'Chicken' && <>
                            {
                                categories.map((recipe) => (
                                    <div key={recipe.idMeal} className="mealCard">
                                        <img src={recipe.strMealThumb ? recipe.strMealThumb : noPage} alt={recipe.strMeal} />
                                        <h3>{recipe.strMeal.split(' ').slice(0, 3).join(' ')}</h3>
                                        <span><AiOutlineGlobal className='globalIcon' /> {recipe.strArea}</span>
                                        <button onClick={() => handleViewRecipe(recipe.idMeal)}>View Recipe</button>
                                    </div>
                                ))
                            }
                        </>}

                        {activeCategory === 'Dessert' && <>
                            {
                                categories.map((recipe) => (
                                    <div key={recipe.idMeal} className="mealCard">
                                        <img src={recipe.strMealThumb ? recipe.strMealThumb : noPage} alt={recipe.strMeal} />
                                        <h3>{recipe.strMeal.split(' ').slice(0, 3).join(' ')}</h3>
                                        <span><AiOutlineGlobal className='globalIcon' /> {recipe.strArea}</span>
                                        <button onClick={() => handleViewRecipe(recipe.idMeal)}>View Recipe</button>
                                    </div>
                                ))
                            }
                        </>}

                        {activeCategory === 'Goat' && <>
                            {
                                categories.map((recipe) => (
                                    <div key={recipe.idMeal} className="mealCard">
                                        <img src={recipe.strMealThumb ? recipe.strMealThumb : noPage} alt={recipe.strMeal} />
                                        <h3>{recipe.strMeal.split(' ').slice(0, 3).join(' ')}</h3>
                                        <span><AiOutlineGlobal className='globalIcon' /> {recipe.strArea}</span>
                                        <button onClick={() => handleViewRecipe(recipe.idMeal)}>View Recipe</button>
                                    </div>
                                ))
                            }
                        </>}

                        {activeCategory === 'Lamb' && <>
                            {
                                categories.map((recipe) => (
                                    <div key={recipe.idMeal} className="mealCard">
                                        <img src={recipe.strMealThumb ? recipe.strMealThumb : noPage} alt={recipe.strMeal} />
                                        <h3>{recipe.strMeal.split(' ').slice(0, 3).join(' ')}</h3>
                                        <span><AiOutlineGlobal className='globalIcon' /> {recipe.strArea}</span>
                                        <button onClick={() => handleViewRecipe(recipe.idMeal)}>View Recipe</button>
                                    </div>
                                ))
                            }
                        </>}

                        {activeCategory === 'Miscellaneous' && <>
                            {
                                categories.map((recipe) => (
                                    <div key={recipe.idMeal} className="mealCard">
                                        <img src={recipe.strMealThumb ? recipe.strMealThumb : noPage} alt={recipe.strMeal} />
                                        <h3>{recipe.strMeal.split(' ').slice(0, 3).join(' ')}</h3>
                                        <span><AiOutlineGlobal className='globalIcon' /> {recipe.strArea}</span>
                                        <button onClick={() => handleViewRecipe(recipe.idMeal)}>View Recipe</button>
                                    </div>
                                ))
                            }
                        </>}

                        {activeCategory === 'Pasta' && <>
                            {
                                categories.map((recipe) => (
                                    <div key={recipe.idMeal} className="mealCard">
                                        <img src={recipe.strMealThumb ? recipe.strMealThumb : noPage} alt={recipe.strMeal} />
                                        <h3>{recipe.strMeal.split(' ').slice(0, 3).join(' ')}</h3>
                                        <span><AiOutlineGlobal className='globalIcon' /> {recipe.strArea}</span>
                                        <button onClick={() => handleViewRecipe(recipe.idMeal)}>View Recipe</button>
                                    </div>
                                ))
                            }
                        </>}

                        {activeCategory === 'Pork' && <>
                            {
                                categories.map((recipe) => (
                                    <div key={recipe.idMeal} className="mealCard">
                                        <img src={recipe.strMealThumb ? recipe.strMealThumb : noPage} alt={recipe.strMeal} />
                                        <h3>{recipe.strMeal.split(' ').slice(0, 3).join(' ')}</h3>
                                        <span><AiOutlineGlobal className='globalIcon' /> {recipe.strArea}</span>
                                        <button onClick={() => handleViewRecipe(recipe.idMeal)}>View Recipe</button>
                                    </div>
                                ))
                            }
                        </>}

                        {activeCategory === 'Seafood' && <>
                            {
                                categories.map((recipe) => (
                                    <div key={recipe.idMeal} className="mealCard">
                                        <img src={recipe.strMealThumb ? recipe.strMealThumb : noPage} alt={recipe.strMeal} />
                                        <h3>{recipe.strMeal.split(' ').slice(0, 3).join(' ')}</h3>
                                        <span><AiOutlineGlobal className='globalIcon' /> {recipe.strArea}</span>
                                        <button onClick={() => handleViewRecipe(recipe.idMeal)}>View Recipe</button>
                                    </div>
                                ))
                            }
                        </>}

                        {activeCategory === 'Side' && <>
                            {
                                categories.map((recipe) => (
                                    <div key={recipe.idMeal} className="mealCard">
                                        <img src={recipe.strMealThumb ? recipe.strMealThumb : noPage} alt={recipe.strMeal} />
                                        <h3>{recipe.strMeal.split(' ').slice(0, 3).join(' ')}</h3>
                                        <span><AiOutlineGlobal className='globalIcon' /> {recipe.strArea}</span>
                                        <button onClick={() => handleViewRecipe(recipe.idMeal)}>View Recipe</button>
                                    </div>
                                ))
                            }
                        </>}

                        {activeCategory === 'Starter' && <>
                            {
                                categories.map((recipe) => (
                                    <div key={recipe.idMeal} className="mealCard">
                                        <img src={recipe.strMealThumb ? recipe.strMealThumb : noPage} alt={recipe.strMeal} />
                                        <h3>{recipe.strMeal.split(' ').slice(0, 3).join(' ')}</h3>
                                        <span><AiOutlineGlobal className='globalIcon' /> {recipe.strArea}</span>
                                        <button onClick={() => handleViewRecipe(recipe.idMeal)}>View Recipe</button>
                                    </div>
                                ))
                            }
                        </>}

                        {activeCategory === 'Vegan' && <>
                            {
                                categories.map((recipe) => (
                                    <div key={recipe.idMeal} className="mealCard">
                                        <img src={recipe.strMealThumb ? recipe.strMealThumb : noPage} alt={recipe.strMeal} />
                                        <h3>{recipe.strMeal.split(' ').slice(0, 3).join(' ')}</h3>
                                        <span><AiOutlineGlobal className='globalIcon' /> {recipe.strArea}</span>
                                        <button onClick={() => handleViewRecipe(recipe.idMeal)}>View Recipe</button>
                                    </div>
                                ))
                            }
                        </>}

                        {activeCategory === 'Vegetarian' && <>
                            {
                                categories.map((recipe) => (
                                    <div key={recipe.idMeal} className="mealCard">
                                        <img src={recipe.strMealThumb ? recipe.strMealThumb : noPage} alt={recipe.strMeal} />
                                        <h3>{recipe.strMeal.split(' ').slice(0, 3).join(' ')}</h3>
                                        <span><AiOutlineGlobal className='globalIcon' /> {recipe.strArea}</span>
                                        <button onClick={() => handleViewRecipe(recipe.idMeal)}>View Recipe</button>
                                    </div>
                                ))
                            }
                        </>}
                    </div>
                </div>
            </div>
        </>
    )
}
