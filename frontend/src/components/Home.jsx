import React from "react";
import { Accordion, Carousel, Container } from "react-bootstrap";
import Footer from "./Footer";
import Navigation from "./Navigation";
//===============================================================
const Home = () => {
  return (
    <>
      <Navigation />
      <Carousel className="h-50">
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src="https://blog.bonfire.com/wp-content/uploads/2020/09/best-fundraising-websites.png"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src="https://contactspace.com/wp-content/uploads/fundraising-min-scaled.jpeg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <h1 className="text-center mt-5 mb-5">FAQ</h1>
      <Container className="mr-5 mb-5 mt-5">
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How I can Apply</Accordion.Header>
            <Accordion.Body>
              You should go to fund raising section in the navigation bar and
              submit all the required information
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What are the sectors that can involve in the program
            </Accordion.Header>
            <Accordion.Body>
              The company support all the sectors work to improve the society.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
