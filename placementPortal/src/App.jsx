import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Jobs from './components/Jobs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Auth />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
