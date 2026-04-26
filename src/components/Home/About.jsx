import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is <span className="yellow">Micheal Stephen J </span>
              and I'm from <span className="yellow"> Chennai, TamilNadu.</span>
              <br />
              <br />
              I hold a <b className="yellow">Master of Computer Applications</b> from{" "}
              <span className="yellow">SRM University (2022–2024)</span> with a CGPA of 8.88,
              and I'm currently working as a{" "}
              <b className="yellow">Software Engineer at GI Tech Gaming Co India Pvt. Ltd.</b>{" "}
              for over <span className="yellow">1.5 years</span>.
              <br />
              <br />
              As a <b className="yellow"> Full-Stack </b> developer with a strong backend focus,
              I specialize in building <b className="yellow">scalable, high-performance</b> systems
              and APIs. I enjoy tackling complex challenges and continuously expanding my skillset.
              <br />
              <br />
              I am proficient in{" "}
              <b className="yellow"> Rust (Actix Web), JavaScript, Java, Python, and SQL, </b>
              and have hands-on experience with{" "}
              <b className="yellow">Redis, Kafka, and the ELK Stack</b>{" "}
              (Elasticsearch, Logstash, Kibana) for real-time data pipelines and observability.
              <br />
              <br />
              I have a passion for working with{" "}
              <b className="yellow">Node.js, Docker, Nginx,</b> and
              <i>
                <b className="yellow"> modern backend technologies</b>
              </i>{" "}
              as well as
              <i>
                <b className="yellow"> React.js</b>
              </i>{" "}
              on the frontend.
              <br />
              <br />
              I am also exploring the exciting world of{" "}
              <i>
                <b className="yellow">Artificial Intelligence</b>
              </i>
              , including running local AI models with{" "}
              <b className="yellow">Ollama</b>, and building intelligent applications
              powered by <b className="yellow">LLMs.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/micheal6920"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/michealstephenj"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/MichealStephen692/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="leetcode"
                >
                  <SiLeetcode />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;