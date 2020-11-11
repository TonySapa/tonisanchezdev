import React from 'react'
import './project.css'

const Project = (props) => {
  const project = props.project

  // Styles
  const cssContainer = {
    boxShadow: '3px 5px 50px rgba(0, 0, 0, 0.4)',
    //display: 'flex',
    marginBottom: '100px',
    width: '80%',
    height: '640px',
    background: 'white',
    borderRadius: '7px',
    position: 'relative'
  }

  return (
    <div style={cssContainer}>

      {project.imageMobile
      ? <a className='project' href={project.url} target='_blank'>
          <img src={`images/portfolio/${project.imageMobile}`} alt="cover" width="200px" class="cover" />
        </a>
      : null}

      <div style={{
          height: '342px',
          margin: 0,
          position: 'relative',
          overflow: 'hidden',
          //zIndex: -1,
          borderTopLeftRadius: '7px',
          borderTopRightRadius: '7px'
        
      }}>
        <a href={project.url} target='_blank'>
          <img 
            style={{
              backgroundSize: 'cover',
              transform: 'skewY(-2.2deg)',
              marginTop: '-15px'
            }} 
            src={`images/portfolio/${project.image}`} alt='hey'
          />{/* renders .gif background */}
        </a>
      </div>

      <div className="description">

        <div class="project-col1">
          {project.skills
            ? project.skills.map(s => <span class="tag">{s} </span>)
            : null}          
        </div> {/* end column1 */}

        <div class="project-col2">
          <p style={{textAlign:'justify'}}>{props.project.bio}</p>

          <div class="avatars">

            {project.logos
            ? project.logos.map(logo => (
                <a className='project' data-tooltip={logo.name} data-placement="top">
                  <img src={`images/logos/${logo.img}`} alt={logo} width="8%" />
                </a>
              ))
            : null}

          </div>
        </div>
      </div>
    </div>
  )
}


export default Project