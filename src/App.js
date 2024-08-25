import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <div className="everything">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App