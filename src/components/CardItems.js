import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function CardItems(props) {
  return (
    <CardItem>
      <li className="CardItems">
        <Link className="CardItemsLink" to={props.path}>
          <figure className="CardItemsPic" data-category={props.label}>
            <img className="CardItemsImg" src={props.src} alt="Project Img" />
          </figure>
          <div className="CardItemsInfo">
            <h5 className="CardItemsText">{props.text}</h5>
          </div>
        </Link>
      </li>
    </CardItem>
  );
}

const CardItem = styled.div`
  .CardItemsLink {
    display: flex;
    flex-flow: column;
    width: 100%;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
  }

  .CardItemsPic {
    position: relative;
    width: 100%;
    padding-top: 67%;
    overflow: hidden;
  }

  .fade-img {
    animation-name: fade-img;
    animation-duration: 2s;
  }

  .CardItemsPic::after {
    content: attr(data-category);
    position: absolute;
    bottom: 0;
    margin-left: 10px;
    padding: 6px 8px;
    max-width: calc((100%) - 60px);
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    background-color: #1f98f4;
    box-sizing: border-box;
  }

  .CardItemsImg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    transition: all 0.2s linear;
  }

  .CardItemsImg:hover {
    transform: scale(1.1);
  }

  .CardItemsInfo {
    padding: 20px 30px 30px;
  }

  .CardItemsText {
    color: #252e48;
    font-size: 18px;
    line-height: 24px;
  }
`;
export default CardItems;
