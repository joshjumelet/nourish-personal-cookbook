import { useState } from 'react'
import axios from 'axios'

const UpdateRecipe = ({ recipe, getRecipes }) => {
  
  const [recipeUpdate, setRecipeUpdate] = useState(recipe)

  console.loge(recipeUpdate)

  const handleChange = (event) => {
    const { title, value } = event.target
    setRecipeUpdate((recipeUpdate) => ({
      ...recipeUpdate,
      [title]: value
    }))
  }

  const handleUpdateRecipe = async (event) => {
    event.preventDefault()
    const response = await axios.put(`http://localhost:3001/api/recipes/${recipe._id}`, recipeUpdate)
    getRecipes()
  }

  return (
    <div></div>
  )
}

export default UpdateRecipe