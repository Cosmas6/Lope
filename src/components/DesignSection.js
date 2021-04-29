import React from "react";
import PlotD68 from "./ImageSliders/PlotD68";
import PlotD118 from "./ImageSliders/PlotD118";
import Maisonette from "./ImageSliders/Maisonette";
import PlotR79 from "./ImageSliders/PlotR79";
import PlotR185 from "./ImageSliders/PlotR185";
import designHero from "../img/designHero.jpeg";
import styled from "styled-components";
import plot1 from "../img/D68/1.jpg";
import plot2 from "../img/D68/2.jpg";
import plot3 from "../img/D68/3.jpg";
import plot4 from "../img/D68/4.jpg";
import plot5 from "../img/D68/5.jpg";
import plot6 from "../img/D68/6.jpg";

const Designs = () => {
  return (
    <>
      <DesignPage>
        <div className="title">
          <h1>DESIGNS</h1>
        </div>
        <div className="slideshow">
          <h3>Plot No. D68</h3>
          <PlotD68 />
          <h3>Plot No. D118</h3>
          <PlotD118 />
          <h3>Maisonette</h3>
          <Maisonette />
          <h3>Plot No. R79</h3>
          <PlotR79 />
          <h3>Plot No. R185</h3>
          <PlotR185 />
        </div>
        <div className="belowtext"></div>
      </DesignPage>
      <div class="container">
        <div class="carousel slide" id="main-carousel" data-ride="carousel">
          <ol class="carousel-indicators">
            <li
              data-target="#main-carousel"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#main-carousel" data-slide-to="1"></li>
            <li data-target="#main-carousel" data-slide-to="2"></li>
            <li data-target="#main-carousel" data-slide-to="3"></li>
            <li data-target="#main-carousel" data-slide-to="4"></li>
            <li data-target="#main-carousel" data-slide-to="5"></li>
            <li data-target="#main-carousel" data-slide-to="6"></li>
          </ol>

          {/* <!-- /.carousel-indicators --> */}

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block img-fluid" src={plot1} alt="" />
              <div class="carousel-caption d-none d-md-block">
                <h1>Mountain</h1>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block img-fluid" src={plot2} alt="" />
              <div class="carousel-caption d-none d-md-block">
                <h3>Mountain</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci esse vitae exercitationem fugit, numquam minus!
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block img-fluid" src={plot3} alt="" />
              <div class="carousel-caption d-none d-md-block">
                <h3>Mountain</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci esse vitae exercitationem fugit, numquam minus!
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block img-fluid" src={plot4} alt="" />
              <div class="carousel-caption d-none d-md-block">
                <h3>Mountain</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci esse vitae exercitationem fugit, numquam minus!
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block img-fluid" src={plot5} alt="" />
              <div class="carousel-caption d-none d-md-block">
                <h3>Mountain</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci esse vitae exercitationem fugit, numquam minus!
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block img-fluid" src={plot6} alt="" />
              <div class="carousel-caption d-none d-md-block">
                <h3>Mountain</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci esse vitae exercitationem fugit, numquam minus!
                </p>
              </div>
            </div>
          </div>
          {/* <!-- /.carousel-inner --> */}

          <a
            href="#main-carousel"
            class="carousel-control-prev"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
            <span class="sr-only" aria-hidden="true">
              Prev
            </span>
          </a>
          <a
            href="#main-carousel"
            class="carousel-control-next"
            data-slide="next"
          >
            <span class="carousel-control-next-icon"></span>
            <span class="sr-only" aria-hidden="true">
              Next
            </span>
          </a>
        </div>
        {/* <!-- /.carousel --> */}
      </div>
      {/* <!-- /.container --> */}

      <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
      <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
      <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
      <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
      <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
      <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
    </>
  );
};

const DesignPage = styled.div`
  scroll-behavior: smooth;
  width: 100;
  text-align: center;
  min-height: 30vh;
  font-size: 20px;
  h3 {
    text-align: center;
    font-size: 50px;
    padding: 3rem 0 1rem 0;
    color: #f38120;
  }

  .title {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
      url(${designHero});
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 80vh;
    line-height: 3;
    justify-content: space-evenly;
    color: #ffff;
    text-align: center;
    h1 {
      padding-top: 8rem;
      font-size: 50px;
    }
  }

  @media screen and (max-width: 2290px) {
    .slideshow {
      padding: 0rem 20rem 0rem 20rem;
    }
  }

  @media screen and (max-width: 1290px) {
    .slideshow {
      padding: 0rem 20rem 0rem 20rem;
    }
  }

  @media screen and (max-width: 770px) {
    .slideshow {
      padding: 0rem 9rem 0rem 9rem;
    }
  }

  @media screen and (max-width: 550px) {
    .slideshow {
      padding: 0rem 3rem 0rem 3rem;
    }
  }

  @media screen and (max-width: 420px) {
    .slideshow {
      padding: 0rem 1rem 0rem 1rem;
    }
  }
`;

export default Designs;
