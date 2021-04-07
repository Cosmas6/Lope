import React from "react";
import styled from "styled-components";
import contactUs from "../img/contactUs.jpg";
import SocialFollow from "../components/SocialFollow";

const ContactSection = () => {
  const sendMail = () => {
    const mailto =
      "mailto:lopeconstructionltd@gmail.com?subject=Test subject&body=Body content";
    window.location.href = mailto;
  };
  return (
    <Contact>
      <div className="Heading">
        <h1>CONTACT US</h1>
      </div>

      <ContactContainer>
        <div className="ContactHeader">
          <h3>GET IN TOUCH</h3>
          <p>Get in touch or follow us online</p>
        </div>
        <div className="ContactDescription">
          <div className="DetailedContacts">
            <h4>CONTACTS</h4>
            <p>
              Eaton Place, <br /> Regus Village Market, <br /> United Nations
              Cresent. <br />
              P.O. Box 471- 01030 <br />
              Tel: +254 (0) 726 325 011 <br />
              Nairobi - Kenya
            </p>
          </div>
          <div className="SocialMedia">
            <h4>SOCIAL MEDIA</h4>
            <SocialFollow />
            <button onClick={sendMail}>Send mail</button>
          </div>
        </div>
      </ContactContainer>
    </Contact>
  );
};

const Contact = styled.div`
  .Heading {
    color: #ffff;
    text-align: left;
    padding: 30px 0px 40px 60px;
    font-size: 20px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
      url(${contactUs});
    background-position: right top;
    background-repeat: no-repeat;
    background-size: auto;
    background-attachment: fixed;
    height: 40vh;
    h1 {
      text-align: left;
      line-height: 40vh;
      font-size: 50px;
    }
  }

  @media screen and (max-width: 420px) {
    .Heading {
      padding: 30px 0px 40px 0px;
      text-align: left;
      h1 {
        font-size: 40px;
      }
    }
  }
`;

const ContactContainer = styled.div`
  scroll-behavior: smooth;
  background-color: #e48838;
  line-height: 50px;
  margin: 0px 0px 0px 40vw;

  .ContactHeader {
    text-align: center;
    p {
      font-size: 20px;
    }
    h3 {
      font-size: 40px;
    }
  }

  .ContactDescription {
    text-align: left;
    display: grid;
    grid-area: 4 / 1;
    grid-gap: 0px;
  }

  .DetailedContacts {
    position: relative;
    padding: 0px 5vw 10px 10px;
    display: inline-block;
    p {
      font-size: 20px;
    }
    h4 {
      font-size: 30px;
    }
  }

  .SocialMedia {
    text-align: center;
    h4 {
      font-size: 30px;
    }
    grid-area: 1 / 2 / span 5 / span 3;
    padding: 0px 5vw 10px 10px;
  }

  @media screen and (max-width: 770px) {
    scroll-behavior: smooth;
    background-color: #e48838;
    line-height: 50px;
    margin: 0px 0px 0px 0px;

    .ContactHeader {
      text-align: center;
      p {
        font-size: 20px;
      }
      h3 {
        font-size: 40px;
      }
    }

    .ContactDescription {
      text-align: left;
      display: grid;
      grid-area: 4 / 1;
      grid-gap: 0px;
    }

    .DetailedContacts {
      position: relative;
      padding: 0px 5vw 10px 10px;
      display: inline-block;
      p {
        font-size: 20px;
      }
      h4 {
        font-size: 30px;
      }
    }

    .SocialMedia {
      text-align: center;
      h4 {
        font-size: 30px;
      }
      grid-area: 1 / 2 / span 5 / span 3;
      padding: 0px 5vw 10px 10px;
    }
  }

  @media screen and (max-width: 550px) {
    scroll-behavior: smooth;
    background-color: #e48838;
    line-height: 50px;
    margin: 0px 0px 0px 0px;

    .ContactHeader {
      text-align: center;
      p {
        font-size: 20px;
      }
      h3 {
        font-size: 40px;
      }
    }

    .ContactDescription {
      text-align: left;
      display: grid;
      grid-area: 4 / 1;
      grid-gap: 0px;
    }

    .DetailedContacts {
      position: relative;
      padding: 0px 5vw 10px 10px;
      display: inline-block;
      p {
        font-size: 20px;
      }
      h4 {
        font-size: 30px;
      }
    }

    .SocialMedia {
      text-align: center;
      h4 {
        font-size: 30px;
      }
      grid-area: 1 / 2 / span 5 / span 3;
      padding: 0px 5vw 10px 10px;
    }
  }

  @media screen and (max-width: 420px) {
    .ContactHeader {
      text-align: center;
      p {
        font-size: 20px;
      }
      h3 {
        font-size: 40px;
      }
    }

    .ContactDescription {
      text-align: left;
    }

    .DetailedContacts {
      padding: 0px 5vw 10px 10px;

      p {
        font-size: 20px;
      }
      h4 {
        font-size: 30px;
      }
    }

    .SocialMedia {
      position: absolute;
      display: contents;
      text-align: center;
      h4 {
        font-size: 30px;
      }

      padding: 0px 5vw 10px 10px;
    }
  }
`;

export default ContactSection;
