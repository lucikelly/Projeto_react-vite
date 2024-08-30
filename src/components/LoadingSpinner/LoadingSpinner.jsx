import './LoadingSpinner.css'
import loadingGif from "../../assets/loading.gif"

function LoadingSpinner () {
  return (
    <div className="loading-overlay-container d-flex al-center jc-center">
        <img src={loadingGif} alt='Loading' height="80px" />
    </div>
  )
} 

export default LoadingSpinner