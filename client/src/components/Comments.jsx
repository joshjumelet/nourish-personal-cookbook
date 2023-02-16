import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Comments = ({ getRecipes }) => {

  let { id } = useParams()

  let navigate = useNavigate()

  
  const initialComment = {
    name: '',
    text: '',
    image: '',
    recipe_id: id
  }
  const [createComment, setCreateComment] = useState(initialComment)

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:3001/api/recipes/:id/comments', createComment)
    setCreateComment(initialComment)
    navigate(`/recipes`)
    }

  const handleChange = (event) => {
    setCreateComment({ ...createComment, [event.target.id]: event.target.value })
  }

  return (
    <div className="addComment">
      <h4>Add Comment</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          id='name'
          type='text'
          placeholder="Enter your name"
          value={createComment.name}
          onChange={handleChange}
        />
        <label htmlFor='text'>Comment:</label>
        <input
          id='text'
          type='text'
          placeholder="Enter your comment"
          value={createComment.text}
          onChange={handleChange}
        />
        <label htmlFor='image'>Image:</label>
        <input
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