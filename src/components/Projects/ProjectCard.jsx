import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = (props) => {
  return (
    <Card
      className="project-card-view"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        borderRadius: "12px",
      }}
    >
      {/* Image container with overlay */}
      <div style={{ position: "relative", width: "100%", height: "200px", overflow: "hidden" }}>
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            objectPosition: "center",
            transition: "transform 0.4s ease",
            display: "block",
          }}
          onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
          onMouseLeave={e => e.target.style.transform = "scale(1)"}
        />
        {/* Dark gradient overlay at bottom of image */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "60px",
          background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
          pointerEvents: "none",
        }} />
      </div>

      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexGrow: 1,
        }}
      >
        <Card.Title style={{ fontWeight: "700", fontSize: "1.1rem" }}>
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize: "14px", color: "#ccc", flexGrow: 1 }}>
          {props.description}
        </Card.Text>

        <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <BsGithub />
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <CgWebsite />
              Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;