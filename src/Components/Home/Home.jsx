import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css'
import homelogo from './home-main.svg'
import avatar from './avatar.svg'
<source />

function Home() {
  return (
    <div>
<Row>
  <Col>
  <div className='hey'>
      <h2>
        Hi There!<span className="wave mb-3">👋</span> <br />
        <span > I'M <b className='name'>ARJUN HARIDAS,</b></span> <br />
        <div className="mb-3"></div> {/* Add space */}
        <span className='role'>
          <span className="typing-text">FULL STACK WEB DEVELOPER   <b className="typing-cursor">|</b>
</span>        
        </span>
      </h2>
    </div>
  </Col>

  <Col>
  <img className='homeright' src={homelogo} alt="" />
  </Col>
</Row>
<Row>
  <Col>
  <h1 className='intro'>LET ME <b className='name'>INTRODUCE</b>  MYSELF</h1>
   <p className='aboutme'>
Iam a passionate MEARN Stack Developer and technology enthusiast with a strong foundation in web development and a keen eye for data, I create innovative solutions that bridge technology and user experience.
 <br /> <br />
 Iam fluent in HTML, CSS, BOOTSTRAP, JAVASCRIPT, REACT and have good communication skills.

   </p>
  </Col>

  <Col>
  <img className='avatar' src={avatar} alt="" />
  </Col>

  <div className='find'>
    <h2 className='hfind'>FIND ME ON</h2>
    <div className="social-icons">
          <a href="https://github.com/ArjunHaridas07" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github icon"></i>
          </a>
          <a href="https://twitter.com/Arjunharidas08" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter icon"></i>
          </a>
          <a href="https://www.linkedin.com/in/arjun-haridas-8a9696176/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin icon"></i>
          </a>
          <a href="https://www.instagram.com/_arju_n_.__/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram icon"></i>
          </a>
        </div>
  </div>
</Row>



    </div>
  )
}

export default Home