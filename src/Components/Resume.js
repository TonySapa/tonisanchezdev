import React from 'react';
import data from '../resumeData.json';

const Education = (props) => (
  <div>
    {props.education.map(e => (
      <div key={e.school}><h3>{e.school}</h3>
        <p className="info">{e.degree} <span>&bull;</span><em className="date">{e.graduated}</em></p>
      <p>{e.description}</p></div>
    ))}
  </div>
)

const Work = (props) => (
  <div>
    {props.work.map(w => (
      <div key={w.company} style={{marginBottom: '60px'}}>
        <a href={w.web}><h3>{w.company}</h3></a>
        <p className="info">
          {w.title}<span>&bull;</span> <em className="date">{w.years}</em>
          <a href={w.web} target='_blank' style={{marginLeft:'20px'}}>{w.web.slice(12)}</a>
        </p>
        <p style={{textAlign:'justify'}}>{w.description}<br/><br/>
          {w.achievements ? <div><span>ACHIEVEMENTS:</span><br/></div> : null}
          {w.achievements}
        </p>
      </div>
    ))}
  </div>
)

const Badges = (props) => {
  const badgeDivStyle = {display: 'inline'}
  const badgeStyle = {height:'170px', margin: '10px'}

    return (
    <div>
      {props.certifications.map(c => (
        <div key={`${c.name}_badge`} style={badgeDivStyle}>
          {c.badge ? <a href={c.badge_link} target='_blank'><img src={`../../images/diplomas/${c.badge}`} alt='mongodb certification' style={badgeStyle} /></a> : null}
        </div>
      ))}
    </div>
  )
}

const Resume = (props) => (
  <section id="resume">

    <div className="row education">
      
        <div className="three columns header-col">
          <h1><span>Higher Education</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
              <div className="twelve columns">
                <Education education={data.resume.education} />
              </div>
          </div>
        </div>
    </div>

    <div className="row education">
        <div className="three columns header-col">
          <h1><span>IT Certifications</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
              <div className="twelve columns">
                <p style={{textAlign:'center'}}>
                  <Badges certifications={data.resume.certifications} />
                </p>
                <h1>Proven skills</h1>
                <p>MongoDB querying and database administration, CRUD Applications with MongoDB, React and Node, programming in JavaScript, REST API with Node and MongoDB, Google Cloud/AWS development and deployment, Web development with HTML5 and CSS3, Advanced Excel (VBA Macros, PowerQuery, Excel API...) and G-Suite Enterprise Administration. </p>
              </div>
          </div>
        </div>
    </div>

    <div className="row work">
      <div className="three columns header-col">
        <h1><span>Recent work</span></h1>
      </div>
      <div className="nine columns main-col">
        <Work work={data.resume.work} />
      </div>
    </div>
  </section>
)

export default Resume;
