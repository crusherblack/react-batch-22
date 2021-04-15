import { useState, useEffect, useContext } from "react";
import { Button, Modal, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import products from "../fakeData/products.json";

import { UserContext } from "../contexts/userContext";

const Home = () => {
  const [state, dispatch] = useContext(UserContext);
  const router = useHistory();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <h1>{state.titleGlobal}</h1>
      <div className="mt-3 ">
        <Row>
          <Col
            style={{
              border: "1px solid red",
            }}
            xs={6}
            md={5}
          >
            Content 1
          </Col>
          <Col
            style={{
              border: "1px solid red",
            }}
            xs={6}
            md={3}
          >
            Content 2
          </Col>
          <Col
            style={{
              border: "1px solid red",
            }}
          >
            Content 3
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              border: "1px solid red",
            }}
          >
            Content 1
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              border: "1px solid red",
            }}
          >
            Content 1
          </Col>
          <Col
            style={{
              border: "1px solid red",
            }}
          >
            Content 1
          </Col>
        </Row>
        <button
          onClick={() => setIsVisible(true)}
          className="btn btn-primary bg-merah"
        >
          SHOW MODAL
        </button>

        <Row className="mt-5">
          {products.map((product, index) => {
            return (
              <Col md={3} key={index}>
                <div className="mb-3 card">
                  <div className="card-header">{product.title}</div>
                  <div className="card-body">DESCRIPTION</div>
                </div>
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col md={3}>
            <div
              onClick={() => router.push("/about")}
              className="mt-5 mb-3 text-white card bg-primary"
            >
              <div className="card-header">PINDAH KE ABOUT</div>
              <div className="card-body">Klik ini untuk pinda ke about</div>
            </div>
          </Col>
        </Row>
      </div>

      <div>State: {isVisible ? "show" : "not show"}</div>

      <Modal centered show={isVisible} onHide={() => setIsVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsVisible(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setIsVisible(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
