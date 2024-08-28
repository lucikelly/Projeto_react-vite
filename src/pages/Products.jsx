import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import ProjectList from "../components/ProjectList/ProjectList"



function Projects() {

  return (
    <>
    <Header/>
    <Banner title="Projects" image="projects.jpg"/>
    <div className="container">
      <ProjectList/>
    </div>
    <Footer/>
    </>
  )
}

export default Projects