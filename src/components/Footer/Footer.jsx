
import './Footer.css'
import { Link } from "react-router-dom"

import LogoDNC from "../../assets/LogoDNC.svg"
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'
import usa from '../../assets/usaIcon.svg'
import brasil from '../../assets/brasilIcon.svg'

function Footer () {

  return(
    <footer>
      <div className="container">
       <div className="d-flex jc-space-b mobile-fd-column">
        <div className="footer-logo-col">
          <img src={LogoDNC} className="footer-logo"/>
          <p className="gray-1-color">
          A escola que prepara você para as profissões em alta no mercado de trabalho.
          </p>
          <div className="d-flex social-links" >
            <a href="#" target="_blank">
              <img src={facebook} />
            </a>
            <a href="#" target="_blank">
              <img src={twitter} />
            </a>
            <a href="#" target="_blank">
              <img src={linkedin} />
            </a>
            <a href="#" target="_blank">
              <img src={instagram} />
            </a>
        
          </div>
         
        </div>
        <div className="d-flex mobile-fd-column">
            <div className="footer-col">
              <h3>Pages</h3>
              <ul >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Contact</h3>
              <p className="gray-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
              <p className="gray-1-color">suporte@escoladnc.com.br</p>
              <p className="gray-1-color">(19) 99187-4342</p>

            </div>
          </div>
       </div>
       <div className="d-flex jc-space-b footer-copy">
          <p className='gray-1-color'>Copyright © DNC - 2024</p>
          <div className="langs-area d-flex ">
            <img src={brasil} height="29px" />
            <img src={usa} height="29px"/>
          </div>
        </div>
      </div>
    </footer>
  )

}

export default Footer