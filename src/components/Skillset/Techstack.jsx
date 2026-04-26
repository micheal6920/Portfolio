import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiRust,
  SiJavascript,
  SiPostgresql,
  SiRedis,
  SiApachekafka,
  SiElasticsearch,
  SiKibana,
  SiRabbitmq,
} from "react-icons/si";
import { FaJava, FaPython } from "react-icons/fa";
import { DiHtml5 } from "react-icons/di";
import { AiOutlineRobot } from "react-icons/ai";

const skills = [
  { icon: <SiRust />,          label: "Rust",          color: "#CE422B" },
  { icon: <SiJavascript />,    label: "JavaScript",    color: "#F7DF1E" },
  { icon: <FaJava />,          label: "Java",          color: "#007396" },
  { icon: <FaPython />,        label: "Python",        color: "#3776AB" },
  { icon: <DiHtml5 />,         label: "HTML5",         color: "#E34F26" },
  { icon: <SiPostgresql />,    label: "PostgreSQL",    color: "#336791" },
  { icon: <SiRedis />,         label: "Redis",         color: "#DC382D" },
  { icon: <SiApachekafka />,   label: "Kafka",         color: "#ffffff" },
  { icon: <SiElasticsearch />, label: "Elasticsearch", color: "#FEC514" },
  { icon: <SiKibana />,        label: "Kibana",        color: "#E8488B" },
  { icon: <SiRabbitmq />,      label: "RabbitMQ",      color: "#FF6600" },
  { icon: <AiOutlineRobot />,  label: "Ollama AI",     color: "#a78bfa" },
];

function Techstack() {
  return (
    <>
      <style>{`
        .skill-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 18px 10px;
          margin: 10px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(6px);
          transition: all 0.3s ease;
          cursor: default;
          min-height: 100px;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--card-color);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3), 0 0 12px var(--card-glow);
        }

        .skill-icon {
          font-size: 2.2rem;
          color: var(--card-color);
          transition: transform 0.3s ease;
          line-height: 1;
        }

        .skill-card:hover .skill-icon {
          transform: scale(1.15);
        }

        .skill-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          text-align: center;
          transition: color 0.3s ease;
        }

        .skill-card:hover .skill-label {
          color: rgba(255, 255, 255, 0.95);
        }
      `}</style>

      <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
        {skills.map((skill, index) => (
          <Col xs={4} sm={3} md={2} key={index} style={{ padding: "4px" }}>
            <div
              className="skill-card"
              style={{
                "--card-color": skill.color,
                "--card-glow": skill.color + "44",
              }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <p className="skill-label">{skill.label}</p>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Techstack;