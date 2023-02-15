import { useState, useEffect } from "react"
import axios from "axios"
// import UpdateRecipe from '/UpdateRecipe'

const Recipes = (response) => {

  const initialState = [{
    title: '',
    ingredients: '',
    instructions: '',
    image: ''
  }]

  const [recipes, setRecipes] = useState([])
  const [updateRecipe, setUpdateRecipe] = useState()

  const getRecipes = async () => {
    const response = await axios.get('http://localhost:3001/api/recipes')
    setRecipes(response.data.recipes)
  }
  const deleteRecipe = async (recipeId) => {
    const response = await axios.delete(`http://localhost:3001/api/recipes/${recipeId}`)
    getRecipes()
  }

return (
  <div className="recipe-container">
    {props.recipes.map((recipe) => (
      <div className="recipe-card" onClick={() => showRecipes(recipe)} key={recipe.id}>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt='' />
        <p>{recipe.ingredients}</p>
        <p>{recipe.instructions}</p>
      </div>
    ))}
  </div>
)
}

export default Recipes