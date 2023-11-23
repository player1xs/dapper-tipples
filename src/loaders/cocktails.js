export async function getCocktailIndex() {
  const res = await fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
  return res.json()
}


export async function getCocktailSingle(id) {
  const res = await fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
  return res.json()
}