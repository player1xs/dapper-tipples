
// import { useLoaderData } from 'react-router-dom'


// export default function CocktailSgl() {
  
//   const cocktails = useLoaderData()
//   console.log(cocktails)
//   const { strDrink, strInstructions, strDrinkThumb} = cocktails.drinks[0]
//   console.log(strDrink)

//   return (
//     <>
//       <h1>{ strDrink }</h1>
//       <p>{ strInstructions }</p>
//       <img src={ strDrinkThumb }/>
//     </>
//   )
// }


import { useLoaderData, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


export default function CocktailSingle() {
  
  const cocktails = useLoaderData()
  const cocktailDetails = cocktails.drinks[0]
  const { strDrink, strInstructions, strDrinkThumb} = cocktailDetails

  const [ ingList, setIngList] = useState([])

  useEffect(() => {
    const ings = []
      for (let i=1; i<16; i++) {
        let ing = `strIngredient${i}`
        let meas = `strMeasure${i}`
        if (cocktailDetails[ing] !== null){
          ings.push({
            ingredient: cocktailDetails[ing],
            measure: cocktailDetails[meas]
          })
        }
      }
    setIngList(ings)
  }, [cocktailDetails, cocktails.drinks])



  return (
    <>
      <div className="sglHeader">
        <h1>{ strDrink }</h1>
        <Link to={`/cocktails`} className="backBtn">Back</Link>
      </div>
      <div className="cocktailInfo">
        <img className="imgDr"src={ strDrinkThumb }/>
        <div className="text">
          <ul>
            {ingList.map((item, idx) =>{
              if (item.measure !== null)
                return <li key={idx}>{item.measure} {item.ingredient}</li>
              else return <li key={idx}>{item.ingredient}</li>
            })
            }
          </ul>
          <p className="instructions">{ strInstructions }</p>
        </div>
      </div>
    </>
  )
}