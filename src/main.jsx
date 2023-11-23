import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// StyleBoyz
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/main.scss'

//Components
import App from './App.jsx'
import Home from './components/Home.jsx'
import CocktailIdx from './components/CocktailIdx.jsx'
import CocktailSgl from './components/CocktailSgl.jsx'
import NotFound from './components/NotFound.jsx'

//Loaders
import { getCocktailIndex, getCocktailSingle } from './loaders/cocktails.js'


const router = createBrowserRouter([
  {
    path: '/',
    element:<App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cocktails',
        element: <CocktailIdx />,
        loader: getCocktailIndex
      },
      {
        path: '/cocktails/:cocktailId',
        element: <CocktailSgl />,
        loader: async ({ params }) => getCocktailSingle(params.cocktailId)
      },
      {
        path: '*',
        element: <NotFound />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)