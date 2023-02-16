import { NavLink } from 'react-router-dom'

const Nav = () => {

  return (
    <header>
      <nav className='navbar'>
        <NavLink to="/" className="inactive" activeClassName="active">Home</NavLink>
        <NavLink to="/about" className="inactive" activeClassName="active">About</NavLink>
        <NavLink to="/recipes" className="inactive" activeClassName="active">Recipes</NavLink>
        <NavLink to="/recipes/form" className="inactive" activeClassName="active">New Recipe</NavLink>
      </nav>
    </header>
  )
}

export default Nav