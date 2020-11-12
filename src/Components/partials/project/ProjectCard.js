import React, { useState, useEffect } from "react";


/*
NOTES:

props.width will be window.innerWidth...

*/

const ProjectCard = (props) => {
  const project = props.project
  const [width, setWidth] = useState(window.innerWidth)
  const [flexDirection, setFlexDirection] = useState('column')
  const [previewMargin, setPreviewMargin] = useState(null)
  const [previewPosition, setPreviewPosition] = useState('relative')
  const [previewXY, setPreviewXY] = useState({ top: '', left: '' })

  useEffect(() => {
    window.addEventListener(
      'resize', () => setWidth(window.innerWidth)
    )
  }, [width])

  
  useEffect(() => {
    if(width < 770 || window.innerWidth < 770) {
      setFlexDirection('column')
      setPreviewMargin('0px')
      setPreviewPosition('relative')
      setPreviewXY({ top: null, left: null, width: null })
    } else {
      setFlexDirection(null)
      setPreviewMargin('-300px')
      setPreviewPosition('absolute')
      setPreviewXY({ top: '70%', left: '17px', width: '220px' })
    }
  }, [width])

  const container = {
    position: "relative",
    margin: "0 auto 0 auto",
    background: 'white',
    //top: 0,
    //left: 0,
    width: "100%",
    maxWidth: '790px',
    height: "100%",
    //background: "black",
    // delete above
    display: "flex",
    flexWrap: "wrap",
    aligItems: "stretch",
    borderRadius: "5px",
    boxShadow: "3px 5px 50px rgba(0, 0, 0, 0.4)",
    lineHeight: '25px',
    color: '#B1B0AC'
  };

  const row = {
    //background: "brown",
    // delete above
    height: "48.5%",
    //width: "100%",
    borderRadius: "5px",
    textAlign: "center",
    display: "flex",
    alignItems: "stretch"
  };

  const description1 = {
    //background: 'green',
    // delete above
    margin: '0px',
    borderRadius: '5px',
    //display: 'flex',
    flex: '30%'
  };

  const description2 = {
    //background: "lime",
    borderRadius: "5px",
    flex: '70%',
    padding: '0 8% 0 5%',
    textAlign: 'justify',
    //fontFamily: 'Quicksand'
  };

  const imgBack = {
    position: "relative",
    overflow: "hidden",
    height: "110%",
    //margin: '-15px 0 0 0',
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px"
  };

  const text = {
    padding: '20px 0 0 0',
    width: "100%",
    //height: "74%",
    display: "inline-block",
    //padding: "10px"
  };

  const logos = {
    //background: "orange",
    // delete above
    /*position: 'relative',
    width: "100%",
    height: "90px",
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'*/
    margin: '23px 0 30px 0'
  };

  const logoElement = {
    width: '8%',
    minWidth: '30px'
  }

  const tooltip = {
    width: '100%',
    marginBottom: '24px',
    padding: '0 10px 0 10px'
  }

  const mobilePreview = {
    //position: 'relative',
    zIndex: 2,
    //background: 'blue',
    height: '50%',
    width: '100%',
    display: "inlineBlock",
  }

  const previewItem = {
    zIndex: 1,
    position: previewPosition,
    top: previewXY.top,
    left: previewXY.left,
    width: previewXY.width,
    marginTop: previewMargin
  }

  const tagsDiv = {
    justifyContent: 'space-evenly',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '10px 18px 0px 18px'
  }

  const tag = {
    //background: '#dfdfdf',
    borderRadius: '20px',
    padding: '0px 8px',
    fontSize: '14px',
    margin: '4px 2px 6px 2px',
    lineHeight: '25px',
    cursor: 'pointer'
  }

  return (
    <div style={container}>
      <div style={{ ...row, height: '340px' }}>
        <a style={imgBack} href={project.url} target='_blank'>
          <img
            src={`images/portfolio/${project.image}`}
            alt="cover"
            width="100%"
            style={{
              //backgroundSize: "cover",
              objectFit: "cover",
              transform: "skewY(-2.2deg)",
              marginTop: "-19px",
              height: '80%'
            }}
          />
        </a>
      </div>
      <div
        style={{
          ...row,
          //background: "blue",
          overflow: "hidden",
          //minHeight: "350px",
          flexDirection: flexDirection
        }}
      >
        <div style={{...description1, flexGrow: 1}}>
          <div style={mobilePreview}>
            <img src={`images/portfolio/${project.imageMobile}`} alt='mobile-preview' width='100%' style={previewItem} />
          </div>
          <div style={tagsDiv}>
            {project.skills.map(s => <span class="tag" style={tag}>{s} </span>)}
          </div>
        </div>
        <div style={{...description2, flexGrow: 2}}>
          <div style={text}>{props.project.bio}</div>
          <div style={logos} class='avatars'>
            {project.logos.map(logo => (
              <a /*style={tooltip}*/ data-tooltip={logo.name} data-placement="top" >
                <img src={`images/logos/${logo.img}`} alt={logo} style={logoElement} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard