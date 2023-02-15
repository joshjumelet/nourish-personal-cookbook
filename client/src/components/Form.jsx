import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


const Form = ({ getRecipes }) => {

  let navigate = useNavigate()

  const initialRecipe = {
    title: '',
    ingredients: '',
    instructions: '',
    image: ''
  }


const [createRecipe, setCreateRecipe] = useState(initialRecipe)

const handleSubmit = async (event) => {
  event.preventDefault()
  await axios.post('http://localhost:3001/api/recipes', createRecipe)
  setCreateRecipe(initialRecipe)
  navigate('/recipes')
  getRecipes()
}

const handleChange = (event) => {
  setCreateRecipe({ ...createRecipe, [event.target.id]: event.target.value })
}


return (
  <div className='addRecipe'>
    <h1>Create a Recipe</h1>
    <h4>Enter your info below:</h4>
    <form onSubmit={handleSubmit}>
      <label htmlFor='title'>Recipe Title:</label>
      <input
        id='title'
        type='text'
        placeholder='Enter your recipe title'
        value={createRecipe.title}
        onChange={handleChange}
      />
      <label htmlFor='ingredients'>Ingredient List:</label>
      <textarea
        id='ingredients'
        type='text'
        placeholder='Enter your ingredient list'
        cols='30' rows='10'
        value={createRecipe.ingredients}
        onChange={handleChange}
      />
      <label htmlFor='instructions'>Instructions:</label>
      <textarea
        id='instructions'
        type='text'
        placeholder='Enter your instructions'
        cols='30' rows='10'
        value={createRecipe.instructions}
        onChange={handleChange}
      />
      <label htmlFor='image'>Image Link:</label>
      <input
        id='image'
        type='text'
        placeholder='Enter your image URL here'
        value={createRecipe.image}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  </div>
)

}

export default Form