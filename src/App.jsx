
import { BrowserRouter as  Router, Route, Routes, Link } from 'react-router-dom'

//Pages
import Home from './pages/home'
import About from './pages/About'
import Projects from './pages/Products'
import Contact from './pages/Contact'

function App() {
 

  return (
    <Router>
      <Routes>
       <Route path="/" element={ <Home/>}></Route>
       <Route path="/about" element={<> <About/> <Link to="/">navegar</Link></>}></Route>
       <Route path="/projects" element={<Projects/>}></Route>
       <Route path="/contact" element={ <Contact/>}></Route>

      </Routes>
    </Router>
  )
}

export default App
