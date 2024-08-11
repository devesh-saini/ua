import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Hero from './Components/Hero/Hero'

function App() {
  return (
    <>
      <div className="everything">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Hero />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App