import { useContext } from 'react'
import './Footer.css'
import { Link } from "react-router-dom"

import LogoDNC from "../../assets/logodnc.png"
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'
import usa from '../../assets/usaIcon.svg'
import brasil from '../../assets/brasilIcon.svg'
import Button from '../Button/Button'
import { AppContext } from '../../contexts/AppContext'


function Footer () {

  const appContext = useContext(AppContext)
  const changeLanguage = (country) => {
    appContext.setLanguage(country)
  }
  return(
    <footer>
      <div className="container">
       <div className="d-flex jc-space-b mobile-fd-column">
        <div className="footer-logo-col">
          <img src={LogoDNC} className="footer-logo"/>
          <p className="gray-1-color">
         {appContext.languages[appContext.language].general.footerLogoText}
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
              <h3>{appContext.languages[appContext.language].general.pages}</h3>
              <ul >
                <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                <li><Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>{appContext.languages[appContext.language].general.contact}</h3>
              <p className="gray-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
              <p className="gray-1-color">suporte@escoladnc.com.br</p>
              <p className="gray-1-color">(19) 99187-4342</p>

            </div>
          </div>
       </div>
       <div className="d-flex jc-space-b footer-copy">
          <p className='gray-1-color'>Copyright © DNC - 2024</p>
          <div className="langs-area d-flex ">
            <Button buttonStyle="unstyled" onClick={() => changeLanguage('br')}>
              <img src={brasil} height="29px" />
            </Button>
            <Button buttonStyle="unstyled" onClick={() => changeLanguage('en')}>
              <img src={usa} height="29px" />
            </Button>
            
          </div>
        </div>
      </div>
    </footer>
  )

}

export default Footer