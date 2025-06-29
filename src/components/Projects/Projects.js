import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import facerecognition from '../../Assets/Projects/face recognition.png';
import Agrichatbot from '../../Assets/Projects/Agri chatbot.png';
import salaryprediction from '../../Assets/Projects/salary prediction.png';
import bankdash from '../../Assets/Projects/BankDash.png';
import EyeHospital from '../../Assets/Projects/EyeHospital.png';
import freshandmore from '../../Assets/Projects/Fresh&more.png';
import BusBooking from '../../Assets/Projects/Bus Booking.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={freshandmore}
              isBlog={false}
              title="Fresh & More"
              titleColor="#a24dd3" /* Purple color */
              description="Fresh & More! A modern café landing page with an integrated digital menu. Featuring pages for Home, About, Menu, and Contact, designed with responsiveness and interactivity in mind for both mobile and desktop users"
              ghLink="https://github.com/Amol5766/M1"
              demoLink="https://freshandmore-two.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EyeHospital}
              isBlog={false}
              title="Eye Hospital"
              titleColor="#a24dd3" /* Purple color */
              description=" A user-friendly platform for patients and visitors to explore eye treatments, diseases, services, and specialists. Designed with simplicity, responsiveness, and accessibility to ensure a smooth experience across all devices."
              ghLink="https://github.com/Amol5766/Eye-hospital"
              demoLink="https://eye-hospital-psi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BusBooking}
              isBlog={false}
              title="Bus Booking App"
              titleColor="#a24dd3" /* Purple color */
              description="A responsive web app to search buses, select seats, and confirm bookings. Built with Angular and powered by a mock JSON backend, it simulates a real-world bus reservation system with smooth UX and dynamic routing."
              ghLink="https://github.com/Amol5766/Bus-Booking"
              demoLink="https://bus-booking-inky.vercel.app/search"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bankdash}
              isBlog={false}
              title="Bank Dash "
              titleColor="#a24dd3" /* Purple color */
              description="Welcome to BankDash! A secure platform that offers OTP-based authentication and a powerful analytics dashboard. Designed to enhance user security and provide insightful data visualizations"
              ghLink="https://github.com/Amol5766/BankDash."
              demoLink="https://bankdash-ochre.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Agrichatbot}
              isBlog={false}
              title="Agri chatbot "
              titleColor="#a24dd3" /* Purple color */
              description="An chatbot using Python and AI/ML offers farmers real-time guidance on crop management and pest control through conversational interfaces. It leverages NLP and machine learning to provide actionable insights."
              ghLink="https://github.com/Amol5766/agri-chatbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salaryprediction}
              isBlog={false}
              title="Salary prediction"
              titleColor="#a24dd3" /* Purple color */
              description="A salary prediction model using Python and AI/ML forecasts employee salaries based on various factors like experience and skills. It utilizes regression algorithms to provide accurate and data-driven salary estimates."
              ghLink="https://github.com/Amol5766/salary-prediction-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facerecognition}
              isBlog={false}
              title="Face recognition"
              titleColor="#a24dd3" /* Purple color */
              description="Facial recognition technology identifies and verifies people by analyzing their facial features. It scans and matches faces from images or videos. Commonly used for security and personalized access, it offers a fast and reliable way to recognize individuals."
              ghLink="https://github.com/Amol5766/face-detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
