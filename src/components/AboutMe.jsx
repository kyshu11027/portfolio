import React from "react";
import "../css/about-me.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const AboutMe = () => {
  return (
    <div className="container-fluid">
      <div className="about-me-container row">
        <div className="about-me col-12 col-md-8">
          <img src="/assets/headshot.jpg" className="headshot" />
          <div className="about-me-text">
            <h2>hey, i'm kevin!</h2>
            <p>welcome to my personal website. </p>
            <p>
              i intend on making this platform an area for me to document my
              projects and progress as a software engineer.
            </p>
            <p>
              in May 2023, i graduated from the University of Southern
              California with a degree in biomedical engineering. from my
              studies, i found my interest in computer programming/science, and
              i've been pursuing a career in full-stack web development. Check
              out my skills page for the technologies that I've worked with.
            </p>
            <p>
              i love to learn new skills and apply them to projects. feel free
              look through my LinkedIn and projects page. also, don't hesitate
              to reach out to me with any questions. i'd love to connect!
            </p>
          </div>
        </div>

        <div className="hobbies col-12 col-md-4">
          <CarouselProvider
            naturalSlideWidth={1000}
            naturalSlideHeight={1000}
            totalSlides={3}
            visibleSlides={1}
            currentSlide={1}
            interval={1000}
          >
            <Slider>
              <Slide index={0}>
                <img src="/assets/hitting.jpeg" className="carousel-image" />
              </Slide>
              <Slide index={1}>
                <img src="/assets/capybara.jpeg" className="carousel-image" />
              </Slide>
              <Slide index={2}>
                <img src="/assets/lolla.jpg" className="carousel-image" />
              </Slide>
            </Slider>
            <div className="button-container">
              <ButtonBack className="carousel-button back">Back</ButtonBack>
              <ButtonNext className="carousel-button next">Next</ButtonNext>
            </div>
            <div className="hobbies-caption">
              here are some of the things i do outside of programming. feel free
              to chat with me about any of them!
            </div>
          </CarouselProvider>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
