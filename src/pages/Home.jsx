import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import { Link } from "react-router-dom";

import HeroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

import Category from "../components/UI/category/Category.jsx";
import "../styles/home.css";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";
//import { useEffect, useState } from "react";

import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae  ",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae  ",
  },
  {
    title: "Easy Pickup",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae  ",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizzza ] = useState([]);

  useEffect(() => {
    const filterdPizza = products.filter(item => item.category === "Pizza");
    const slicePizza = filterdPizza.slice(0, 4);
     setHotPizzza(slicePizza);
  }, []);
  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

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
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text_center">
              <h5 className="feature_subtitle mb-4">What we serve </h5>
              <h2 className="feature_title">Just sit back at home </h2>
              <h2 className="feature_title">
                we will <span> take care</span>
              </h2>
              <p className="mt-4 mb-1 feature_text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                nobis{" "}
              </p>
              <p className="feature_text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, libero.{" "}
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature_item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  ></img>
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div className="food_category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all_btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>

                <button
                  className={`d-flex align-items-center gap-2 
                ${category === "BURGER" ? "foodBtnActive" : ""}`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>
                <button
                  className={`d-flex align-items-center gap-2 
                ${category === "PIZZA" ? "foodBtnActive" : ""}`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2 
                ${category === "BREAD" ? "foodBtnActive" : ""}`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="why_choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100"></img>
            </Col>
            <Col lg="6" md="6">
              <div className="why_tasty-treat">
                <h2 className="tasty_treat-title ">
                  Why <span> Tasty Treat? </span>
                </h2>

                <p className="tasty_treat-desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Itaque excepturi magni dolor amet ex corrupti blanditiis
                  dolorem iusto culpa dignissimos consequuntur inventore
                  aliquid, dolores officiis deserunt consectetur saepe
                  reiciendis vel?
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose_us-title d-flex align-items-center gap-2  ">
                      <i class="ri-checkbox-circle-line"></i>Fresh and tasty
                      foods
                    </p>
                    <p className="choose_us-desc ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit perferendis .
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose_us-title  d-flex align-items-center gap-2  ">
                      <i class="ri-checkbox-circle-line"></i>Quality Support
                    </p>
                    <p className="choose_us-desc ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit perferendis .
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose_us-title  d-flex align-items-center gap-2  ">
                      <i class="ri-checkbox-circle-line"></i>Order from anywhere
                      {""}
                    </p>
                    <p className="choose_us-desc ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit perferendis .
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section 
      >
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2> Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6 " md="6">
              <div className="testimonial ">
                <h5 className="testimonial_subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial_title mb-4 ">
                  what our <span>customers</span> are saying
                </h2>
                <p className="testimonial_desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  aliquid pariatur illum inventore autem ex eos corrupti? Omnis,
                  quia cupiditate?
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6 " md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
