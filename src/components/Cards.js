import React from "react";
import styled from "styled-components";
import CardItems from "./CardItems";
import CapitalSquare from "../img/Projects/CapitalSquare.jpg";
import GardenEstate from "../img/Projects/GardenEstate.jpg";
import MaisonetteNanyuki from "../img/Projects/MaisonetteNanyuki.jpg";
import ParadiseKiambu from "../img/Projects/ParadiseKiambu.jpg";

function Cards() {
  return (
    <Card>
      <h1>Our Projects</h1>
      <div className="CardContainer">
        <div className="CardWrapper">
          <ul className="CardItems">
            <CardItems
              src={CapitalSquare}
              text="Capital Square, Westlands"
              label="Project 1"
              path="/"
            />
            <CardItems
              src={GardenEstate}
              text="Garden Estate, Ruaraka"
              label="Project 2"
              path="/"
            />
            <CardItems
              src={ParadiseKiambu}
              text="Five Star Paradise, Kiambu Road"
              label="Project 3"
              path="/"
            />
            <CardItems
              src={MaisonetteNanyuki}
              text="Maisonette Nanyuki"
              label="Project 4"
              path="/"
            />
          </ul>
        </div>
      </div>
    </Card>
  );
}

const Card = styled.div`
  padding: 4rem;
  background: #fff;

  h1 {
    text-align: center;
    font-size: 50px;
    padding: 2rem 0 3rem 0;
    color: #f38120;
  }

  .CardContainer {
    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 1120px;
    width: 90%;
    margin: 0 auto;
  }

  .CardWrapper {
    position: relative;
    margin: 50px 0 45px;
  }

  .CardItems {
    display: flex;
    flex: 1;
    margin: 0 1rem;
    border-radius: 10px;
  }

  @media screen and (min-width: 1024px) {
    .CardItems {
      display: flex;
    }
  }

  @media screen and (max-width: 1024px) {
    .CardItems {
      margin-bottom: 2rem;
    }
  }

  @media screen and (max-width: 760px) {
    .CardItems {
      display: block;
    }
  }
`;

export default Cards;
