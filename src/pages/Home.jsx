import Banner from "../components/Banner/Banner"
import Button from "../components/Button/Button"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"


function Home() {

  return (
    <>
    <Header/>
    <p>Home</p>
    <Button buttonStyle="primary" arrow>ola</Button>
    <Banner title="Home" image="about.jpg"/>
    <Footer/>
    </>
  )
}

export default Home