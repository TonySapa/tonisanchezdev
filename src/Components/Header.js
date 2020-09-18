import React, { Component } from 'react';
import background1 from './images/background3c.png'
import circledImage from './images/profilePicture1.png'
//import ParticlesBg  from "particles-bg";

const blue = {color:'rgb(135, 220, 226)'}

class Header extends Component {

  render() {

    if(this.props.data){
       var project = this.props.data.project;
       var github = this.props.data.github;
      var name = this.props.data.name;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">
      {/*<ParticlesBg type="circle" bg={true} />*/}
      <img src={background1} alt='background image' className='back-style' />
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Hello</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
	         <li><a className="smoothscroll" href="#resume">CV</a></li>
            {/*<li><a className="smoothscroll" href="#contact">Contact</a></li>*/}
         </ul>
      </nav>

      <div className="row banner">

         <img src={circledImage} alt='profile picture' className='circled-image' />
      
         <div className="banner-text">
            <h1>{'console.log(`hello ${you}`)'}</h1>
            <h3>{description}</h3>
            <hr />
            <ul className="social">
               <a href="#portfolio"/*href={project}*/ className="smoothscroll button btn project-btn"><i className="fa fa-code"></i>Portfolio</a>
               <a href={github} className="button btn github-btn" target="_blank"><i className="fa fa-github"></i>Github</a>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
