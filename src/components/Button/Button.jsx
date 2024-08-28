import './Button.css'
import whitwArrow from "../../assets/Vector.svg"


function Button ({arrow, buttonStyle, loading, children, ...props}) {
  return(
    <button className={`button ${buttonStyle}`} {...props}>
      {children} {arrow && <img src={whitwArrow}/>}
    </button>
  )
}
export default Button