import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

import HeroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy order & fast delivery</h5>
                <h1 className="mb-4 hero__title">
                  <span>Hungry?</span> Just wait <br />
                  food at <span>your door</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugit atque, consequatur at illo perferendi{" "}
                </p>

                <div className="hero_btns d-flex align-items-center gap-5">
                  <button className="order__btn d-flex align-items-center justify-content-between ">
                    Order now<i className="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all_foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>

                <div className="hero_service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping_icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>

                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping_icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={HeroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <category />
      </section>
    </Helmet>
  );
};

export default Home;
