const { text } = require("express")

const Comments = () => {

  const initialComment = {
    name: '',
    text: '',
    image: ''
  }

  const [createComment, setCreateComment] = useState(initialComment)

  const handleSubmit = async (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {

  }

  return (
    <div></div>
  )

}