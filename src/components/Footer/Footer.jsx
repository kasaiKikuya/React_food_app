import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6" className="footer__logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
            <p>Best Pizzas in town, try it out!</p>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title mb-3">Delivery Time</h5>
            <ListGroup>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Thursday - Sunday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <div className="delivery__time-item border-0 ps-0">
                <span>Monday</span>
                <p>Off day</p>
              </div>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title mb-3">Contact</h5>
            <ListGroup>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Address</span>
                <p>55 Chu Văn An ,Đà Nẵng</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone:</span>
                <p>03456821997</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Tasty Treat on Foody,Shopee Food</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer_title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p>Copyright-2023,made by Phong Vo.All Rights Reserved</p>
          </Col>

          <Col lg="6" md="6">
          <div className="social_links d_flex align-items-center gap-4 justify-content-end" >
            <p className="copyright_text">Follow</p>
            <span>
              <Link to="https://www.facebook.com/voson.phong.7/">
                <i class="ri-facebook-line"></i>
              </Link>
            </span>

            <span>
              <Link to="https://github.com/kasaiKikuya">
                <i class="ri-github-line"></i>
              </Link>
            </span>

            <span>
              <Link to="https://www.linkedin.com/in/phong-võ-trần-sơn-923122204/">
                <i class="ri-linkedin-line"></i>
              </Link>
            </span>
          </div>
          </Col>
          
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
