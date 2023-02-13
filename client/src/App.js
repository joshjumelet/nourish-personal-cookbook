import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import ViewRecipes from './components/ViewRecipes'
import { Routes, Route } from 'react-router-dom'
// import axios from 'axios'
import { useState, useEffect } from 'react'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<ViewRecipes />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
