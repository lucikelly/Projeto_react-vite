import { Link } from "react-router-dom"
import LogoDNC from "../../assets/LogoDNC.svg"
import './Header.css'
import Button from "../Button/Button"
import { useState } from 'react'

function Header () {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () =>{
    setIsOpen (!isOpen)
  }
  return(

    <header>
      <div className="container">
        <div className="al-center d-flex jc-space-b ">
          <Link to="/"><img src={LogoDNC}/></Link>
          <div className="mobile-menu">
            <Button buttonStyle="secudary" onClick={toggleMenu}>
                Menu
            </Button>
          </div>
          <nav className={`${isOpen? 'open' : ''}`}>
            <Button buttonStyle="unstyled" className="mobile-menu close-btn" onClick={toggleMenu}>
              X
            </Button>
            <ul className="d-flex" >
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      
          
       
      </div>
    </header>
  )

}

export default Header