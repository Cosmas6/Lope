import React from "react";
import Carousel from "nuka-carousel";
import plot1 from "../../img/D68/1.jpg";
import plot2 from "../../img/D68/2.jpg";
import plot3 from "../../img/D68/3.jpg";
import plot4 from "../../img/D68/4.jpg";
import plot5 from "../../img/D68/5.jpg";
import plot6 from "../../img/D68/6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const PlotD68 = () => {
  return (
    <SlideShow>
      <Carousel
        getControlsContainerStyles={(key) => {
          switch (key) {
            case "TopRight":
              return {
                backgroundColor: "red",
              };
            default:
              // will apply all other keys
              return {
                cursor: "pointer",
                color: "#f38120",
                padding: "0rem 1rem",
              };
          }
        }}
        defaultControlsConfig={{
          prevButtonStyle: {
            opacity: "0",
          },
          nextButtonStyle: {
            opacity: "0",
          },
        }}
        renderBottomCenterControls={({ currentSlide }) => null}
        renderCenterRightControls={({ nextSlide }) => (
          <FontAwesomeIcon onClick={nextSlide} icon={faAngleRight} size="3x" />
        )}
        renderCenterLeftControls={({ previousSlide }) => (
          <FontAwesomeIcon
            onClick={previousSlide}
            icon={faAngleLeft}
            size="3x"
          />
        )}
        framePadding="10px 0px"
        dragging="true"
        heightMode="max"
        autoGenerateStyleTag="true"
        transitionMode="fade"
        opacityScale="2.85"
        cellAlign="right"
        disableAnimation="true"
        wrapAround="true"
      >
        <img src={plot1} alt="" />
        <img src={plot2} alt="" />
        <img src={plot3} alt="" />
        <img src={plot4} alt="" />
        <img src={plot5} alt="" />
        <img src={plot6} alt="" />
      </Carousel>
    </SlideShow>
  );
};

const SlideShow = styled.div`
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (max-width: 770px) {
  }
`;

export default PlotD68;
