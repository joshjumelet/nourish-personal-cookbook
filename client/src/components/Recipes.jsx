import { useNavigate } from "react-router-dom";

const Recipes = (props) => {
  let navigate = useNavigate()

  const showRecipes = (recipe) => {
    navigate(`${recipe._id}`)
  }

return (
  <div className="recipe-container">
    {props.recipes?.map((recipe) => (
      <div className="recipe-card" onClick={() => showRecipes(recipe)} key={recipe.id}>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt='' />
        <p>{recipe.ingredients}</p>
        <p>{recipe.instructions}</p>
      </div>
    ))}
  </div>
)
}

export default Recipes