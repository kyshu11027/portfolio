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
                        <h2>Hey, I'm Kevin!</h2>
                        <p>Welcome to my personal website. </p>
                        <p>
                            I intend on making this platform an area for me to
                            document my projects and progress as a software
                            engineer.
                        </p>
                        <p>
                            In May 2023, I graduated from the University of
                            Southern California with a degree in biomedical
                            engineering. From my studies, I found my interest in
                            computer programming/science, and I've been pursuing
                            a career in full-stack web development. Check out my
                            skills page for the technologies that I've worked
                            with.
                        </p>
                        <p>
                            I love to learn new skills and apply them to
                            projects. Feel free look through my LinkedIn and
                            projects page. Also, don't hesitate to reach out to
                            me with any questions. I'd love to connect!
                        </p>
                    </div>
                </div>

                <div className="hobbies col-12 col-md-4">
                    <CarouselProvider
                        naturalSlideWidth={1000}
                        naturalSlideHeight={1000}
                        totalSlides={3}
                        visibleSlides={1}
                        currentSlide={0}
                        interval={1000}
                    >
                        <Slider>
                            <Slide index={0}>
                                <img
                                    src="/assets/hitting.jpeg"
                                    className="carousel-image"
                                />
                            </Slide>
                            <Slide index={1}>
                                <img
                                    src="/assets/capybara.jpeg"
                                    className="carousel-image"
                                />
                            </Slide>
                            <Slide index={2}>
                                <img
                                    src="/assets/lolla.jpg"
                                    className="carousel-image"
                                />
                            </Slide>
                        </Slider>
                        <div className="button-container">
                            <ButtonBack className="carousel-button back">
                                Back
                            </ButtonBack>
                            <ButtonNext className="carousel-button next">
                                Next
                            </ButtonNext>
                        </div>
                        <div className="hobbies-caption">
                            Here are some of the things I do outside of
                            programming. Feel free to chat with me about any of
                            them!
                        </div>
                    </CarouselProvider>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
