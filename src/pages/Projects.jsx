import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

// Beautiful, theme-matched images for each project
const walletImg  = "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format&fit=crop&q=80"; // crypto/wallet dark neon
const weatherImg = "https://images.unsplash.com/photo-1530908295418-a12e326966ba?w=600&auto=format&fit=crop&q=80"; // dramatic sky/weather
const todoImg    = "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&auto=format&fit=crop&q=80"; // clean minimal desk/planning

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={walletImg}
              isBlog={false}
              title="Wallet API"
              description="A high-performance backend Wallet API built with Rust and Actix Web, designed for scalability and efficiency. Handles secure wallet operations and financial transactions with a strong focus on reliability, low latency, and backend optimization."
              ghLink="https://github.com/micheal6920/Wallet_Api"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherImg}
              isBlog={false}
              title="Weather Application"
              description="A real-time Weather Application built with JavaScript that fetches live weather data and displays current conditions, temperature, humidity, and forecasts. Features a clean, responsive UI with dynamic updates based on the user's searched location."
              ghLink="https://github.com/micheal6920/weather-Application"
              demoLink="https://weather-app-60028079122.development.catalystserverless.in/app/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoImg}
              isBlog={false}
              title="To-Do List"
              description="A clean and minimal To-Do List application built with CSS and JavaScript, allowing users to efficiently manage daily tasks. Features adding, completing, and deleting tasks with a smooth, intuitive interface focused on productivity and simplicity."
              ghLink="https://github.com/micheal6920/To-Do-List"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
};

export default Projects;