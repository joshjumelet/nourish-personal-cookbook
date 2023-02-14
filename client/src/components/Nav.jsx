import { NavLink } from 'react-router-dom'

const Nav = () => {

  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="/recipes/form">New Recipe</NavLink>
      </nav>
    </header>
  )
}

export default Nav