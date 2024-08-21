import { Link } from "react-router-dom"
import LogoDNC from "../../assets/LogoDNC.svg"
import './Header.css'

function Header () {

  return(
    <header>
      <div className="container">
        <div className="al-center d-flex jc-space-b ">
          <Link to="/"><img src={LogoDNC}/></Link>
          <nav>
            <ul className="d-flex">
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