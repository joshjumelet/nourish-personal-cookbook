import { useState } from "react"
import axios from "axios"

const Comments = ({ getRecipes, recipe }) => {
  
  const initialComment = {
    name: '',
    text: '',
    image: '',
  }
  const [createComment, setCreateComment] = useState(initialComment)

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post(`http://localhost:3001/api/recipes/${recipe._id}/comments`, createComment)
    setCreateComment(initialComment)
    getRecipes()
    }

  const handleChange = (event) => {
    const {name, value} = event.target
    setCreateComment((prevState) => ({ ...prevState, [name]: value }))
  }

  return (
    <div className="add-comment">
      <h4>Add Comment</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          name={'name'}
          id='name'
          type='text'
          placeholder="Enter your name"
          value={createComment.name}
          onChange={handleChange}
        />
        <label htmlFor='text'>Comment:</label>
        <input
          name='text'
          id='text'
          type='text'
          placeholder="Enter your comment"
          value={createComment.text}
          onChange={handleChange}
        />
        <label htmlFor='image'>Image:</label>
        <input
        name='image'
        id='image'
        type='text'
        placeholder='Enter your image URL here'
        value={createComment.image}
        onChange={handleChange}
      />
      <button type='submit'>Comment</button>
      </form>
    </div>
  )

}

export default Comments