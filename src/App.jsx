
import { BrowserRouter as  Router, Route, Routes} from 'react-router-dom'

//Pages
import Home from './pages/home'
import About from './pages/About'
import Projects from './pages/Products'
import Contact from './pages/Contact'

import ScrollToTop from './utils/ScrollToTop'

function App() {
 

  return (
    <Router>
      <ScrollToTop/>
      <Routes>
       <Route path="/" element={ <Home/>}></Route>
       <Route path="/about" element={<About/> }></Route>
       <Route path="/projects" element={<Projects/>}></Route>
       <Route path="/contact" element={ <Contact/>}></Route>

      </Routes>
    </Router>
  )
}

export default App
