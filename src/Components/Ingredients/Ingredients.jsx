import { useEffect, useState } from 'react'
import './IngredientsStyle.scss'
import axios from 'axios'


export default function Ingrediants() {
    const [ingrediants, setIngrediants] = useState([])

    async function getIngrediants() {
        try {
            const response = await axios.get('www.themealdb.com/api/json/v1/1/list.php?i=list')
            setIngrediants(response)
            
        } catch (error) {
            return error.message
        }
    }


    useEffect(() => {
        getIngrediants()
    }, [])


    return (
        <>
            <div className="ingrediantsContainer">
                <div className="title">
                    <h1 className='myTitle'>Ingrediant Component</h1>
                </div>
                <div className="ingrediantsContent">

                </div>
            </div>
        </>
    )
}
