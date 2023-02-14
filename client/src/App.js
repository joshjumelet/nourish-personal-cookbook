import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Recipes from './components/Recipes'
import Form from './components/Form'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './styles/App.css'
import { createRecipe } from '../../controllers/recipeController'

function App() {
  const [createRecipe, setCreateRecipe] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route
            path="/recipes/:id/form"
            element={
              <Form
                createRecipe={createRecipe}
                setCreateRecipe={setCreateRecipe}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
