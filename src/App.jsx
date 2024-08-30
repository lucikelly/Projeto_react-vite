import { useContext } from 'react'
import { BrowserRouter as  Router, Route, Routes} from 'react-router-dom'

//Pages
import Home from './pages/home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import ScrollToTop from './utils/ScrollToTop'
import { AppContext } from './contexts/AppContext'

import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'

function App() {
 
  const appContext = useContext(AppContext)

  if(appContext.loading) {
    return <LoadingSpinner/>
  }



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
