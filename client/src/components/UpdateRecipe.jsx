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
      <h6>Update Recipe</h6>
      <form onSubmit={handleUpdateRecipe}>
        <input
          name='title'
          id='title'
          type='text'
          placeholder='Update recipe title'
          value={recipeUpdate.title}
          onChange={handleChange}
        />
        <input
          name='ingredients'
          id='ingredients'
          type='text'
          placeholder='Update recipe ingredients'
          value={recipeUpdate.ingredients}
          onChange={handleChange}
        />
        <input
          name='instructions'
          id='instructions'
          type='text'
          placeholder='Update recipe instructions'
          value={recipeUpdate.instructions}
          onChange={handleChange}
        />
        <input
          name='image'
          id='image'
          type='text'
          placeholder='Update image'
          value={recipeUpdate.image}
          onChange={handleChange}
        />
        <button type="update">Update</button>
      </form>
    </div>
  )
}

export default UpdateRecipe