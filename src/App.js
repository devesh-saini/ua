import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <div className="everything min-h-[100vh] flex flex-col justify-between">
        <Router>
          <div className="Navbar">
            <Navbar />
          </div>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <div className="Footer">
            <Footer />
          </div>
        </Router>
      </div>
    </>
  )
}

export default App