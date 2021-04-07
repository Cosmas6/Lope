import React from "react";
import styled from "styled-components";
import CapitalSquare1 from "../img/Projects/CapitalSquare1.jpg";
import CapitalSquare2 from "../img/Projects/CapitalSquare2.jpg";
import CapitalSquare3 from "../img/Projects/CapitalSquare3.jpg";
import CapitalSquare from "../img/Projects/CapitalSquare.jpg";
import GardenEstate from "../img/Projects/GardenEstate.jpg";
import GardenEstate1 from "../img/Projects/GardenEstate1.jpg";
import GardenEstate2 from "../img/Projects/GardenEstate2.jpg";
import GardenEstate3 from "../img/Projects/GardenEstate3.jpg";
import ParadiseKiambu from "../img/Projects/ParadiseKiambu.jpg";
import ParadiseKiambu1 from "../img/Projects/ParadiseKiambu1.jpg";
import ParadiseKiambu2 from "../img/Projects/ParadiseKiambu2.jpg";
import ParadiseKiambu3 from "../img/Projects/ParadiseKiambu3.jpg";
import MaisonetteNanyuki from "../img/Projects/MaisonetteNanyuki.jpg";
import MaisonetteNanyuki1 from "../img/Projects/MaisonetteNanyuki1.jpg";
import MaisonetteNanyuki2 from "../img/Projects/MaisonetteNanyuki2.jpg";
import MaisonetteNanyuki3 from "../img/Projects/MaisonetteNanyuki3.jpg";
import Cards from "./Cards";

const HomeSection = () => {
  return (
    <>
      <Cards />
      <HomeImage>
        <div className="heading">
          <h1>Capital Square, Westlands</h1>
        </div>
        <ul className="image1">
          <li>
            <img src={CapitalSquare} alt="Capital Square" />
          </li>
          <li>
            <img src={CapitalSquare1} alt="Capital Square1" />
          </li>
          <li>
            <img src={CapitalSquare2} alt="Capital Square2" />
          </li>
          <li>
            <img src={CapitalSquare3} alt="Capital Square3" />
          </li>
        </ul>

        <div className="heading">
          <h1>Garden Estate, Ruaraka</h1>
        </div>

        <ul className="image">
          <li>
            <img src={GardenEstate} alt="Garden Estate" />
          </li>
          <li>
            <img src={GardenEstate1} alt="Garden Estate1" />
          </li>
          <li>
            <img src={GardenEstate2} alt="Garden Estate2" />
          </li>
          <li>
            <img src={GardenEstate3} alt="Garden Estate3" />
          </li>
        </ul>

        <div className="heading">
          <h1>Five Star Paradise, Kiambu Road</h1>
        </div>

        <ul className="image">
          <li>
            <img src={ParadiseKiambu} alt="Paradise Kiambu" />
          </li>
          <li>
            <img src={ParadiseKiambu1} alt="Paradise Kiambu1" />
          </li>
          <li>
            <img src={ParadiseKiambu2} alt="Paradise Kiambu2" />
          </li>
          <li>
            <img src={ParadiseKiambu3} alt="Paradise Kiambu3" />
          </li>
        </ul>

        <div className="heading">
          <h1>Maisonette, Nanyuki</h1>
        </div>

        <ul className="image1">
          <li>
            <img src={MaisonetteNanyuki} alt="Maisonette Nanyuki" />
          </li>
          <li>
            <img src={MaisonetteNanyuki1} alt="Maisonette Nanyuki1" />
          </li>
          <li>
            <img src={MaisonetteNanyuki2} alt="Maisonette Nanyuki2" />
          </li>
          <li>
            <img src={MaisonetteNanyuki3} alt="Maisonette Nanyuki3" />
          </li>
        </ul>
      </HomeImage>
    </>
  );
};

const HomeImage = styled.div`
  .heading {
    text-align: center;
    font-size: 30px;
    padding: 2rem 0 3rem 0;
    color: #f38120;
  }
  .image {
    display: flex;
    flex-wrap: wrap;

    li {
      height: 60vh;
      flex-grow: 1;
    }
    img {
      object-position: 50% 50%;
      position: relative;
      object-fit: fill;
      max-height: 100%;
      min-width: 100%;
      object-fit: cover;
      vertical-align: left;
    }
  }
  .image1 {
    display: flex;
    flex-wrap: wrap;

    li {
      height: 60vh;
      flex-grow: 1;
    }
    img {
      object-position: 50% 25%;
      position: relative;
      object-fit: fill;
      max-height: 100%;
      min-width: 100%;
      object-fit: cover;
      vertical-align: left;
    }
  }

  // ADVANCED

  // Portrait

  @media screen and (max-aspect-ratio: 1/1) {
    li {
      display: flex;
      flex-wrap: wrap;
      height: 20vh;
    }
  }

  // Short screens

  @media screen and (max-height: 480px) {
    li {
      height: 80vh;
    }
  }

  // Smaller screens in portrait

  @media screen and (max-aspect-ratio: 1/1) and (max-width: 480px) {
    ul {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
    }

    li {
      height: auto;
      width: 60%;
    }
    img {
      width: 100%;
      height: 60vh;
      min-width: 0;
    }
  }
`;

export default HomeSection;
