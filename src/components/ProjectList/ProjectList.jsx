import { useState, useEffect, useContext } from 'react'
import { getApiData } from '../../services/apiServices'
import './ProjectList.css'
import Button from "../Button/Button"

import likeOk from '../../assets/like_ok.svg'
import gostei from '../../assets/gostar.svg'

import { AppContext } from "../../contexts/AppContext"
import { json } from 'react-router-dom'


function ProjectList (){
  
  const [projects, setProjects] = useState()
  const [favProjects, setFavProjects] = useState([])
  const appContext = useContext(AppContext)

  const savedFavProjects = (id) => {
    setFavProjects((prevFavProjects) => {
      if(prevFavProjects.includes(id)){
        const filterArray = prevFavProjects.filter((projectId) => projectId !== id)
        sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
        return prevFavProjects.filter((projectId)=> projectId !== id )
      } else {
        sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects, id]))
        return [...prevFavProjects, id]
      }

    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try{
        const projectsResponse = await getApiData('projects')
        setProjects(projectsResponse)
      } catch {
        setProjects([])
      }
    }
    fetchData()
  },[])

  useEffect(()=>{
    const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'))
    if(savedFavProjects){
      setFavProjects(savedFavProjects)
    }
  },[])

  return(
    <div className='projects-section'>
      <div className='projects-hero'>
        <h2>{appContext.languages[appContext.language].projects.title}</h2>
        <p>{appContext.languages[appContext.language].projects.subtitle}</p>
     </div>
     <div className='projects-grid'> 
        {
          projects?
            projects.map((project) => (
              <div className='card-projects d-flex jc-center al-center fd-column' key={project.id}>
                <div 
                  className='thumb tertiary-background'
                  style={{backgroundImage: `url(${project.thumb})`}}
                > </div>
                <h3 >{project.title}</h3>
                <p>{project.subtitle}</p>
                <Button buttonStyle="unstyled" onClick={() => savedFavProjects(project.id)}>
                  <img src={favProjects.includes(project.id) ? likeOk : gostei} height="20px" />
                </Button>
                
              </div>
            )) 
          : null
          }
  
        </div>
     </div>


  )
}

export default ProjectList