import "./style/product.css";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import { data } from "../data/data";
import React, { useState } from "react";
import { TfiMoreAlt } from "react-icons/tfi"

const Product = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container-2">
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bold",
            paddingTop: "2rem",
            color: "white",
            textShadow: "2px 1px 3px black",
          }}
        >
          PRODUCT
        </h1>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "white",
            textShadow: "2px 1px 3px black",
          }}
        >
          T - Shirt & Hoodie
        </h2>
        <div className="wrapper">
          <div className="card-group">
            <Row>
              {data.map((data) => (
                <Col md="4">
                  <Card
                    id={data.id}
                    className="card-container-2"
                    style={{
                      background: " rgba(37, 37, 37, 0.8)",
                      borderRadius: "10px",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={data.img}
                      className="img-container-2"
                      style={{ borderRadius: "10px" }}
                    />
                    <Card.Body className="card-body-container-2">
                      <Card.Title
                        className="title-container-2 "
                        style={{ fontWeight: "bold" }}
                      >
                        {data.title}
                      </Card.Title>
                      <Card.Text>Price 120K - 175K</Card.Text>
                      <div className="btn-container-2">
                        <Button
                          href="/payment"
                          className="btn-1 "
                          variant="outline-dark"
                          style={{
                            fontSize: "12.5px",
                            background: "black",
                            color: "white",
                            padding: "1rem 2rem",
                          }}
                        >
                          Checkout Now
                        </Button>
                        <Button
                          className="btn-2"
                          variant="outline-dark"
                          style={{
                            fontSize: "12.5px",
                            background: "black",
                            color: "white",
                            fontWeight: "bold",
                          }}
                          onClick={handleShow}
                        >
                          <TfiMoreAlt/>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>

      {data.map((data) => (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{data.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Tersedia untuk T-Shirt dan Hoodie <br />
            Dibuat dengan Sablon Tempel
            <br />
            Memiliki ukuran dari S sampai XL dan bahan yang nyaman
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ))}
    </>
  );
};
export default Product;
