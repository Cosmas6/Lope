import React from "react";
import styled from "styled-components";
import lopeAbout from "../img/lopeAbout.jpg";

const HeroSection = () => {
  return (
    <HeroImage>
      <Description>
        <div className="title" id="first">
          <h2>Lope Design & Builders</h2>
          <div className="motto">
            <h3>
              CONCEPT. <br /> DESIGN. <br /> PLAN.
            </h3>
          </div>
          {/* <button>About Us</button> */}
        </div>
      </Description>
    </HeroImage>
  );
};

const HeroImage = styled.div`
  scroll-behavior: smooth;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
    url(${lopeAbout});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 80vh;
  opacity: 1;

  @media screen and (max-width: 550px) {
    height: 80vh;
  }
`;

const Description = styled.div`
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  font-size: 20px;
  .title {
    h2 {
      padding-top: 5rem;
      font-size: 50px;
      line-height: 10;
      animation: fade-first 2s linear;
      line-height: 5;
      /* animation: slidein 3s; */
    }
    h3 {
      overflow: hidden; /* Ensures the content is not revealed until the animation */
      white-space: nowrap; /* Keeps the content on a single line */
      margin: auto; /* Gives that scrolling effect as the typing happens */
      letter-spacing: 0.3em; /* Adjust as needed */
      animation: typing 3.5s steps(40);
      br {
        display: none;
      }
    }

    /* The typing effect */
    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    @keyframes slidein {
      from {
        margin: 20% 20%;
        width: 100%;

        visibility: hidden;
      }

      to {
        visibility: visible;
        margin-left: 0%;
        width: 100%;
      }
    }

    @keyframes fade-first {
      0% {
        opacity: 0;
        visibility: hidden;
      }
      33% {
        opacity: 0;
        visibility: hidden;
      }
      50% {
        opacity: 1;
        visibility: visible;
      }
      66% {
        opacity: 1;
        visibility: visible;
      }
      100% {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  @media screen and (max-width: 550px) {
    .title {
      h2 {
        padding-top: 6rem;
        font-size: 15vw;
        line-height: 2;
      }
    }
  }

  @media screen and (max-width: 420px) {
    .title {
      h2 {
        padding: 6rem 6rem;
        font-size: 10vw;
        line-height: 2;
      }

      h3 {
        br {
        display: block;
      }
      }
    }
  }

  @media screen and (max-width: 370px) {
    .title {
      h2 {
        padding: 6rem 3rem;
        font-size: 10vw;
        line-height: 2;
      }
      h3 {
        br {
        display: inline-block;
      }
      }
    }
  }
`;

export default HeroSection;
