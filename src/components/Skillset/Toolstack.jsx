import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiVisualstudio, DiGit } from "react-icons/di";
import { SiPostman, SiDocker, SiNginx, SiSwagger, SiJetbrains } from "react-icons/si";

const tools = [
  { icon: <DiVisualstudio />, label: "VS Code",    color: "#007ACC" },
  { icon: <SiJetbrains />,    label: "RustRover",  color: "#FE315D" },
  { icon: <SiPostman />,      label: "Postman",    color: "#FF6C37" },
  { icon: <SiDocker />,       label: "Docker",     color: "#2496ED" },
  { icon: <SiNginx />,        label: "Nginx",      color: "#009900" },
  { icon: <SiSwagger />,      label: "Swagger",    color: "#85EA2D" },
  { icon: <DiGit />,          label: "Git",        color: "#F05032" },
];

function Toolstack() {
  return (
    <>
      <style>{`
        .tool-card {
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

        .tool-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--card-color);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3), 0 0 12px var(--card-glow);
        }

        .tool-icon {
          font-size: 2.2rem;
          color: var(--card-color);
          transition: transform 0.3s ease;
          line-height: 1;
        }

        .tool-card:hover .tool-icon {
          transform: scale(1.15);
        }

        .tool-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          text-align: center;
          transition: color 0.3s ease;
        }

        .tool-card:hover .tool-label {
          color: rgba(255, 255, 255, 0.95);
        }
      `}</style>

      <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
        {tools.map((tool, index) => (
          <Col xs={4} sm={3} md={2} key={index} style={{ padding: "4px" }}>
            <div
              className="tool-card"
              style={{
                "--card-color": tool.color,
                "--card-glow": tool.color + "44",
              }}
            >
              <div className="tool-icon">{tool.icon}</div>
              <p className="tool-label">{tool.label}</p>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Toolstack;