import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import styled from "styled-components";
import Logo from "./Logo.PNG";
import { Link } from 'react-router-dom';
// import lopeAbout from "./lopeAbout.jpg";

function NavBar() {
  const [click, setClick] = useState(0);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setClick((prevState) => !prevState);
  };

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <NavbarItems>
      <nav className={navbar ? "navbarActive" : "navbar"}>
        <Link to='/' className="navbar-logo">
          <img src={Logo} alt="Lope Logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </NavbarItems>
  );
}

const NavbarItems = styled.nav`
  nav {
    background: linear-gradient(
      90deg,
      hsl(60, 100%, 94.50980392156862%)
    ) !important;
    position: fixed;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    width: 100%;
    top: 0;
    z-index: 1000;
    overflow: visible;
  }

  .navbarActive {
    animation: fadeInDown 0.5s linear;
    background: linear-gradient(
      90deg,
      #fcc99c 20%,
      rgba(244, 130, 33, 255) 75%
    ) !important;
    position: fixed;
    z-index: 1000;
    overflow: hidden;

    @keyframes fadeInDown {
      0% {
        opacity: 0;
        transform: translateY(-5px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  .navbar-logo {
    left: 5px;
    cursor: pointer;
    display: flex;

    img {
      height: 70px;
      background-size: contain;
    }
  }

  .nav-menu {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 2vw;
    list-style: none;
    text-align: center;
    width: 65vw;
    justify-content: end;
    margin-right: 2rem;
  }

  .nav-links {
    color: white;
    text-decoration: none;
    padding: 2rem 1rem;
    font-weight: bold;
  }

  .nav-links:hover {
    background-color: #808285;
    border-radius: 2px;
    transition: all 0.5s ease-out;
    color: #ff960c;
    height: 10vh;
  }

  .fa-bars {
    color: #fff;
  }

  .nav-links-mobile {
    display: none;
  }

  .menu-icon {
    display: none;
    justify-content: end;
  }

  Button {
    font-size: 0.7rem;
    padding: 5px 20px;
  }

  @media screen and (max-width: 900px) {
    .NavbarItems {
      position: fixed;
    }

    .navbarActive {
      background: linear-gradient(
        90deg,
        #ffd9b7 70%,
        rgba(244, 130, 33, 255) 90%
      ) !important;
    }
    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 70px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }

    .nav-menu.active {
      background: #e79146;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1000;
    }

    .nav-links {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;
    }

    .nav-links:hover {
      background-color: #808285;
      color: #ff960c;
      transition: all 0.5s ease-out;
    }

    .navbar-logo {
      cursor: pointer;
      img {
        height: 50px;
        background-size: contain;
      }
    }

    .menu-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }

    .fa-times {
      color: #fff;
      font-size: 2rem;
    }
  }
`;

export default NavBar;
