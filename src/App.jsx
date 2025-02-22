import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Details from './Components/Details/Details'
import NotFound from './Components/NotFound/NotFound.jsx'
import Meals from './Components/Meals/Meals.jsx'
import Ingredients from './Components/Ingredients/Ingredients.jsx'
import Area from './Components/Area/Area.jsx'


function App() {

  const router = createBrowserRouter([{
    path: '/recipe/',
    element: <Layout />, children: [{
      index: true,
      element: <Home />
    }, {
      path: '/recipe/details/:idMeal',
      element: <Details />
    }, {
    }, {
      path: '/recipe/meals',
      element: <Meals />
    }, {
    }, {
      path: '/recipe/ingredients',
      element: <Ingredients />
    }, {
    }, {
      path: '/recipe/area',
      element: <Area />
    }, {
      path: '*',
      element: <NotFound />
    }]
  }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
