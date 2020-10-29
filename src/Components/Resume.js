import React, { Component } from 'react';

const badgeDivStyle = {display: 'inline'}
const badgeStyle = {height:'170px', margin: '10px'}

class Resume extends Component {

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var certifications = this.props.data.certifications.map(c => 
        <div key={c.name}>
          <h1>{c.name}</h1>
          <h6>{c.issuing}</h6>
          <p>{c.description} <a href={c.badge_link} target='_blank'> Verify</a></p>
        </div>
      )
      var badges = this.props.data.certifications.map(c =>
        <div key={`${c.name}_badge`} style={badgeDivStyle}>
          {c.badge ? <a href={c.badge_link} target='_blank'><img src={`../../images/diplomas/${c.badge}`} alt='mongodb certification' style={badgeStyle} /></a> : null}
        </div>
      )

      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })

      var skills = this.props.data.skills.map((skills)=>{
        var className = 'bar-expand '+skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{width:skills.level, backgroundColor:this.getRandomColor()}}className={className}></span><em>{skills.name}</em>
          </li>
        )
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Higher Education</span></h1>
         </div>
         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
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
                  <p>{badges}</p>
                 {/*<p>{certifications}</p>*/}
                  <h1>Proven skills</h1>
                  <p>MongoDB querying and database administration, CRUD Applications with MongoDB, React and Node, programming in JavaScript, REST API with Node and MongoDB, Google Cloud/AWS development and deployment, Web development with HTML5 and CSS3, Microsoft 365, Advanced Excel (VBA Macros, PowerQuery, Excel API...) and G-Suite Enterprise Administration. </p>
               </div>
            </div>
         </div>
      </div>

      <div className="row work">
         <div className="three columns header-col">
            <h1><span>Recent work</span></h1>
         </div>
         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      {/*<div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

          <div className="bars">
            <ul className="skills">
              {skills}
            </ul>
          </div>
        </div>
      </div>*/}
   </section>
    );
  }
}

export default Resume;
