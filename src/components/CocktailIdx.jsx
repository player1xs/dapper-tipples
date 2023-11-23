
// import { useLoaderData, Link } from 'react-router-dom'

// //Bootstrap
// import Col from 'react-bootstrap/Col'
// import Container from 'react-bootstrap/Container'


// export default function CocktailIdx() {

//   const cocktails = useLoaderData()

import { useLoaderData, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

//Bootstrap
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


export default function CocktailList() {
  
  const allDrinks = useLoaderData()


  //States
  const [spirit, setSpirit] = useState('All')
  const [cocktails, setCocktails] = useState(allDrinks)
  const [idList, setIdList] = useState([])
  const [idRnd, setidRnd] = useState(0)


  //Functions
  function handleChange(e){
    setSpirit(e.target.value)
  }


  //Effects
  useEffect(() => {
    const ids = allDrinks.drinks.map(cocktail => {
      return cocktail.idDrink
    })
    setIdList(ids)
  }, [allDrinks.drinks])


  useEffect(() => {
    async function filterBySpirit(){
      try {
        if (spirit !== 'All') {
          const res = await fetch(`https://thecocktaildb.com/api/json/v1/1/filter.php?i=${spirit}`)
          const data = await res.json()
          setCocktails(data)
        }
        else setCocktails(allDrinks)
      } catch (error) {
        console.log(error)
      }
    }
    filterBySpirit()
}, [spirit, allDrinks])


  useEffect(() => {
    const i = Math.floor(Math.random()*idList.length)
    setidRnd(idList[i])
  }, [idList])

  return (
    <>
      <div className="filter-bar">
        <select name="spiritSelect" onChange={handleChange}>
          <option value="All">All</option>
          <option value="Bourbon">Bourbon</option>
          <option value="Brandy">Brandy</option>
          <option value="Gin">Gin</option>
          <option value="Rum">Rum</option>
          <option value="Tequila">Tequila</option>
          <option value="Vodka">Vodka</option>
          <option value="Whiskey">Whiskey</option>
        </select>
        <h1>Cocktail list</h1>
        <Link to={`/cocktails/${idRnd}`} className="randomBtn">Random cocktail</Link>
      </div>
      <Container fluid className='cocktailList overflow-auto'>
        { cocktails.drinks.map(cocktail => {
          const { idDrink, strDrink, strDrinkThumb } = cocktail
        return (
          <Col
          key = {idDrink}
          as={Link}
          style={ { backgroundImage: `url(${strDrinkThumb})` } }
          to={`/cocktails/${idDrink}`}
          >
            <div className="name">{strDrink}</div>
          </Col>
        )
        })}
      </Container>
    </>
  )
}