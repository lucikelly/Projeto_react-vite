import './ProjectList.css'


import likeOk from '../../assets/like_ok.svg'
import gostei from '../../assets/gostar.svg'

function ProjectList (){
  return(
    <div className='projects-section'>
      <div className='projects-hero'>
        <h2>Follow Our Projects</h2>
        <p>It is a long established fact 
          that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
     </div>
     <div className='projects-grid'> 
        <div className='card-projects d-flex jc-center al-center fd-column'> 
          <div className='thumb tertiary-background '> </div>
            <h3>João Silva</h3>
            <p>BH, Brasil</p>
            <img src={likeOk} height="20px" />
          
         
        </div>
        <div className='card-projects d-flex jc-center al-center fd-column'> 
          <div className='thumb tertiary-background '> </div>
            <h3>João Silva</h3>
            <p>BH, Brasil</p>
            <img src={gostei} height="20px"  />
          
         
        </div>
        <div className='card-projects d-flex jc-center al-center fd-column'> 
          <div className='thumb tertiary-background '> </div>
            <h3>João Silva</h3>
            <p>BH, Brasil</p>
            <img src={likeOk} height="20px"  />
          
         
        </div>
        <div className='card-projects d-flex jc-center al-center fd-column'> 
          <div className='thumb tertiary-background '> </div>
            <h3>João Silva</h3>
            <p>BH, Brasil</p>
            <img src={likeOk} height="20px"  />
          
         
        </div>
        <div className='card-projects d-flex jc-center al-center fd-column'> 
          <div className='thumb tertiary-background '> </div>
            <h3>João Silva</h3>
            <p>BH, Brasil</p>
            <img src={likeOk}  height="20px" />
          
         
        </div>
        <div className='card-projects d-flex jc-center al-center fd-column'> 
          <div className='thumb tertiary-background '> </div>
            <h3>João Silva</h3>
            <p>BH, Brasil</p>
            <img src={likeOk} height="20px"  />
          
         
        </div>
        <div className='card-projects d-flex jc-center al-center fd-column'> 
          <div className='thumb tertiary-background '> </div>
            <h3>João Silva</h3>
            <p>BH, Brasil</p>
            <img src={likeOk} height="20px" />
          
         
        </div>
        <div className='card-projects d-flex jc-center al-center fd-column'> 
          <div className='thumb tertiary-background '> </div>
            <h3>João Silva</h3>
            <p>BH, Brasil</p>
            <img src={likeOk} height="20px"  />
          
         
        </div>
     </div>
     
    </div>
  )
}

export default ProjectList