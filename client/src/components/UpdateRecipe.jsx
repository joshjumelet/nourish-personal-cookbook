import { useState } from 'react'
import axios from 'axios'

const UpdateRecipe = ({ recipe, getRecipes }) => {
  
  const [recipeUpdate, setRecipeUpdate] = useState(recipe)

  const handleChange = (event) => {
    const { name, value } = event.target
    setRecipeUpdate((recipeUpdate) => ({
      ...recipeUpdate,
      [name]: value
    }))
  }

  const handleUpdateRecipe = async (event) => {
    event.preventDefault()
    const response = await axios.put(`http://localhost:3001/api/recipes/${recipe._id}`, recipeUpdate)
    console.log(response)
    getRecipes()
  }

  return (
    <div className='update-recipe'>
      <h4>Update Recipe</h4>
      <form onSubmit={handleUpdateRecipe} className='update-form'>
        <label htmlFor='title'>Title:</label>
        <input
          name='title'
          id='title'
          type='text'
          placeholder='Update recipe title'
          value={recipeUpdate.title}
          onChange={handleChange}
        />
        <label htmlFor='ingredients'>Ingredients:</label>
        <textarea
          name='ingredients'
          id='ingredients'
          type='text'
          placeholder='Update recipe ingredients'
          value={recipeUpdate.ingredients}
          onChange={handleChange}
        />
        <label htmlFor='instructions'>Instructions:</label>
        <textarea
          name='instructions'
          id='instructions'
          type='text'
          placeholder='Update recipe instructions'
          value={recipeUpdate.instructions}
          onChange={handleChange}
        />
        <label htmlFor='instructions'>Image:</label>
        <input
          name='image'
          id='image'
          type='text'
          placeholder='Update image'
          value={recipeUpdate.image}
          onChange={handleChange}
        />
        <button type="update" className='update-button'>Update</button>
      </form>
    </div>
  )
}

export default UpdateRecipe