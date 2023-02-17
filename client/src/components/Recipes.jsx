import { useState, useEffect } from "react"
import axios from "axios"
import UpdateRecipe from './UpdateRecipe'
import Comments from './Comments'

const Recipes = (response) => {
  
  const [recipes, setRecipes] = useState([])

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

return (
  <div>
    <h1 className="recipe-title">Recipes</h1>
    <div className="recipe-container">
      {recipes.map((recipe) => (
        <div className="recipe-card" key={recipe._id}>
          <div>
            <img src={recipe.image} alt='' className="recipe-image" />
          </div>
          <h2>{recipe.title}</h2>
          <p>{recipe.ingredients}</p>
          <p>{recipe.instructions}</p>
          <button className="delete-recipe" onClickCapture={() => deleteRecipe(recipe._id)}>Delete Recipe</button>
          <UpdateRecipe getRecipes={getRecipes} recipe={recipe} />
          <Comments getRecipes={getRecipes} recipe={recipe}/>
          <div>
            {recipe.comment_id.map((comment) => (
              <div key={comment._id} className="comment">
                <h4>Name: { comment.name }</h4>
                <p>Comment: {comment.text }</p>
                <img src={ comment.image } alt='' />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>    
)
}

export default Recipes