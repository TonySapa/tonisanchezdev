import React from 'react';
import data from '../resumeData.json';
import Project from './partials/project/Project.js';
import ProjectCard from './partials/project/ProjectCard.js';

const Projects = (props) => (
  data.portfolio.projects.map(p => (
    <div className="columns portfolio-item" style={{width:'100%', margin:'10% 0 12% 0'}}>
      <ProjectCard project={p} />
    </div>
  ))
)
    {/*<div key={p.title} className="columns portfolio-item" style={{width:'100%', marginBottom:'100px'}}>
      <div className="item-wrap">
        <a href={p.url} title={p.title} target='_blank'>
          <img alt={p.title} src={`images/portfolio/${p.image}`} />
          {/*<div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{p.title}</h5>
              <p>{p.category}</p>
            </div>
          </div>
        </a>
      </div>
    </div>*/}

const Portfolio = (props) => {
  
  return (
    <section id="portfolio">
      <h1>Recent Portfolio</h1>

      <div className="row">

        <div className="twelve columns collapsed">


          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

            <Projects />

            {/*<h3 style={{textAlign:'center'}}>
              <span>
                <img src={require(`./images/undraw_warning_cyit.svg`)} alt='illustration' width='40%' />
                <br/>
              </span>More projects soon...
            </h3>*/}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;
