import React from "react";
import PlotD68 from "./ImageSliders/PlotD68";
import PlotD118 from "./ImageSliders/PlotD118";
import Maisonette from "./ImageSliders/Maisonette";
import PlotR79 from "./ImageSliders/PlotR79";
import PlotR185 from "./ImageSliders/PlotR185";
import designHero from "../img/designHero.jpeg";
import styled from "styled-components";

const Designs = () => {
  return (
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
      <div className="belowtext">
        
      </div>
    </DesignPage>
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
