import React, { useState, useEffect } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import Particle from '../Particle';
import pdfPath from '../../Assets/Amol Resume.pdf';
import resImage from '../../Assets/res1.jpg';
import resImage2 from '../../Assets/res2.jpg'; // ✅ Import the image
import { AiOutlineDownload } from 'react-icons/ai';

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize(); // Set the initial width
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant="primary"
            href={pdfPath}
            target="_blank"
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <img
            src={resImage} // ✅ Use imported image
            alt="Resume Preview"
            style={{ width: '55%', height: 'auto' }}
          />
        </Row>

        <div className="resume">
          {' '}
          <img
            src={resImage2} // ✅ Use imported image
            alt="Resume Preview"
            style={{ width: '55%', height: 'auto' }}
          />
        </div>

        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant="primary"
            href={pdfPath}
            target="_blank"
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
