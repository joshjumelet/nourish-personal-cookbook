import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Recipes from './components/Recipes'
import Form from './components/Form'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './styles/App.css'

function App() {
  const [recipes, setRecipes] = useState([])

  const getRecipes = async () => {
    try {
      let response = await axios.get('http://localhost:3001/api/recipes')
      setRecipes(response.data)
    } catch (error) {}
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div className="main">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes recipes={recipes} />} />
          <Route
            path="/recipes/form"
            element={<Form getRecipes={getRecipes} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
