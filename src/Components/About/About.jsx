import React from 'react';
import './About.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import photo from './IMG_0546.jpg';

function About() {
  return (
    <div>
      <Row>
        <Col>
          <div className='aboutleft'>
            <h2 className='who'>Know Who I'm</h2>
          </div>
          <div className='p'>
            <p className='aboutdes'>
              Hi everyone, I'm <strong>Arjun Haridas</strong> from{' '}
              <strong>Kerala, India.</strong> I'm a Btech in Electronics and
              Communication Engineering Graduate. <br />
              Additionally, I'm very enthusiastic about technology and software
              development.
            </p>
          </div>
          <p className='hobbies'>
            Some of my hobbies are: <br /> <br />
            &#8226; Playing Sports <br />
            &#8226; Photography <br />
            &#8226; Travelling
          </p>
        </Col>
        <Col>
          <img className='photo' src={photo} alt='' />
        </Col>
      </Row>
      <div className='pro'>
        <h2 className='pro1'>Professional <strong>Skillsets</strong> </h2>
      </div>
      <div className='skill'>
        <div className='row'>
          <div className='col-md-2'>
            <div className='skill-box'>
              <img className='imgs' src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" />
            </div>

          </div>
          <div className='col-md-2'>
            <div className='skill-box'>
              <img className='imgs' src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png" alt="" />
            </div>
          </div>
          <div className='col-md-2'>
            <div className='skill-box'>
              <img className='imgs' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" alt="" />
            </div>

          </div>
          <div className='col-md-2'>
            <div className='skill-box'>
              <img className='imgs' src="https://cdn.iconscout.com/icon/premium/png-256-thumb/javascript-2752148-2284965.png?f=webp" alt="" />
            </div>
          </div>
          <div className='col-md-2'>
            <div className='skill-box'>
              <img className='imgs' src="https://static-00.iconduck.com/assets.00/file-type-angular-icon-1907x2048-tobdkjt1.png" alt="" />
            </div>
          </div>

          <div className='col-md-2'>
            <div className='skill-box'>
              <img className='imgs' src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-5-1175140.png" alt="" />
            </div>
          </div>
<div className='skills'>

<div className='col-md-2'>
            <div className='skill-box'>
              <img className='imgs' src="https://www.svgrepo.com/show/330398/express.svg" alt="" />

            </div>
          </div>

          <div className='col-md-2'>
            <div className='skill-box'>
              <img className='imgs' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
            </div>
          </div>

          <div className='col-md-2'>
            <div className='skill-box'>
              <img className='imgs' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="" />
            </div>
          </div>
</div>
          
          {/* Add other icons using the same pattern */}
        </div>
      </div>
    </div>
  );
}

export default About;


