import React, { Component } from 'react';
import circledImage from './images/profilePicture1.png'

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bioWhat = this.props.data.bioWhat;
      var bioHow = this.props.data.bioHow;
      var bioWhen = this.props.data.bioWhen;
      var telegram = this.props.data.telegram;
      var telegramLink = this.props.data.telegramLink;
      var email = this.props.data.email;
      var resumeDownload = 'https://drive.google.com/file/d/1fcjlCLwwvxSObvJrpL5pLoCB8aix1JTl/view?usp=sharing' //this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={circledImage} alt="profile-picture" />
         </div>
         <div className="nine columns main-col">
            <h2>What</h2>
            <p>{bioWhat}</p>

            <h2>How</h2>
            <p>{bioHow}</p>

            <h2>When</h2>
            <p>{bioWhen}</p>

            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  Telegram <i className="fab fa-telegram"></i> <a href={telegramLink} target='_blank'><p>{telegram}</p></a>
                  Email <a href='mailto:hello@tonisanchez.dev'><p>{email}</p></a>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} target='blank' className="button" download><i className="fa fa-download"></i>Download CV</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
