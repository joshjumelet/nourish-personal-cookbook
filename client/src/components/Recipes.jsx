import { useState, useEffect } from "react"
import axios from "axios"
import UpdateRecipe from './UpdateRecipe'
import Comments from './Comments'

const Recipes = (response) => {
  
  const [recipes, setRecipes] = useState([])
  // const [comments, setComments] = useState([])

  const getRecipes = async () => {
    const response = await axios.get('http://localhost:3001/api/recipes')
    setRecipes(response.data.recipes)
  }
  const deleteRecipe = async (recipeId) => {
    const response = await axios.delete(`http://localhost:3001/api/recipes/${recipeId}`)
    console.log(response)
    getRecipes()
  }

  useEffect(() => {
    getRecipes()
  }, [])
  console.log(response)
  console.log(recipes)
return (
  <div className="recipe-container">
    <h1 className="recipe-title">Recipes</h1>
    <div>
      {recipes.map((recipe) => (
        <div className="recipe-card" key={recipe._id}>
          <div>
            <img src={recipe.image} alt='' />
          </div>
          <h2>{recipe.title}</h2>
          <p>{recipe.ingredients}</p>
          <p>{recipe.instructions}</p>
          <button className="delete-recipe" onClickCapture={() => deleteRecipe(recipe._id)}>Delete</button>
          <UpdateRecipe getRecipes={getRecipes} recipe={recipe} />
          <div>
            {recipe.comment_id.map((comment) => (
              <div key={comment._id}>
                <h3>Name: { comment.name }</h3>
                <p>Comment: {comment.text }</p>
                <img src={ comment.image } alt='' />
              </div>
            ))}
          </div>
          <Comments getRecipes={getRecipes} recipe={recipe}/>
        </div>
      ))}
    </div>
  </div>    
)
}

export default Recipes