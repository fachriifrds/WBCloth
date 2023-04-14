import "./style/about.css";
import React from "react";
import { Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  const profile = "./images/wbc.jpg";

  return (
    <div className="container-3">
      <Image className="img-container-3 mx-auto" src={profile} alt="profile" />
      <h1
        style={{
          textAlign: "center",
          color: "white",
          textShadow: "2px 1px 3px black",
        }}
      >
        WBCLOTH
      </h1>
      <Link
        href="#"
        style={{
          textAlign: "center",
          textDecoration: "none",
          color: "white",
          fontSize: "25px",
          textShadow: "3px 2px 5px black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "3rem",
        }}
      >
        @wbcloth
      </Link>
      <div className="card-group-container-3">
        <Card
          className="card-container-3 outline-light"
          style={{ background: "#0b0b0b", borderRadius: "10px" }}
        >
          <Card.Header style={{ fontWeight: "bold" }}>Wildan</Card.Header>
          <Card.Body>
            <Card.Title
              classNme="title-up-container-3"
              style={{ fontSize: "20px", fontWeight: "bold" }}
            >
              Owner of WBCLOTH
            </Card.Title>
            <Card.Title
              classNme="title-down-container-3"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                paddingTop: "0.5rem",
              }}
            >
              {" "}
              Contact
            </Card.Title>
            <Card.Text classNme="text-container-3" style={{ fontSize: "15px" }}>
              Whatsapp 088218231239
            </Card.Text>
            <Card.Title
              classNme="title-down-container-3"
              style={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Social Media
            </Card.Title>
            <Card.Text classNme="text-container-3" style={{ fontSize: "15px" }}>
              Instagram @wiwinboy
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="card-container-3 outline-light"
          style={{ background: "#0b0b0b", borderRadius: "10px" }}
        >
          <Card.Header style={{ fontWeight: "bold" }}>
            Fachri Firdaus
          </Card.Header>
          <Card.Body>
            <Card.Title
              classNme="title-up-container-3"
              style={{ fontSize: "20px", fontWeight: "bold" }}
            >
              Website Developer
            </Card.Title>
            <Card.Title
              classNme="title-down-container-3"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                paddingTop: "0.5rem",
              }}
            >
              {" "}
              Contact
            </Card.Title>
            <Card.Text classNme="text-container-3" style={{ fontSize: "15px" }}>
              Whatsapp 083838632667
            </Card.Text>
            <Card.Title
              classNme="title-down-container-3"
              style={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Social Media
            </Card.Title>
            <Card.Text classNme="text-container-3" style={{ fontSize: "15px" }}>
              Instagram @fachriiiifrds
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default About;
