

const Comments = () => {

  const initialComment = {
    name: '',
    text: '',
    image: ''
  }

  const [createComment, setCreateComment] = useState(initialComment)
  const banana = ''
  const handleSubmit = async (event) => {
    const commentPack = {
      name: createComment.name,
      text: createComment.text,
      image: createComment.image,
      recipe_id: banana
    }
    event.preventDefault()
  }

  const handleChange = (event) => {

  }

  return (
    <div></div>
  )

}