import { useContext } from "react"
import './Hero.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

import { AppContext } from "../../contexts/AppContext"

function Hero (){
  const appContext = useContext(AppContext)
  return(
    <div className='hero d-flex al-center'>
      <div className='hero-text'>
        
          <h1>{appContext.languages[appContext.language].hero.title}</h1>
          <p>{appContext.languages[appContext.language].hero.subtitle}</p>
          <Link className='hero-link' to="/about"> 
            <Button buttonStyle="secudary" arrow>
              {appContext.languages[appContext.language].hero.cta}
            </Button>
          </Link>
         
     </div>
    </div>
  )
}

export default Hero