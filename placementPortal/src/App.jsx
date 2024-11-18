import { useState ,useEffect} from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Jobs from './components/Jobs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth'
import Login from './components/Login'
import Loading from './components/Loading'
import AdminPanel from './components/AdminPanel'
import Practice from './components/Practice'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay as needed
  }, []);

  


  return (
    <>
    <Router>
      
      { loading ? <Loading /> : 
      <>
     
      <Navbar/>
        <Routes>
          
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Auth />} />
      <Route path="/login" element={<Login />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/practice" element={<Practice />} />
      </Routes>
      </>
      }
    </Router>
    </>
  )
}

export default App
