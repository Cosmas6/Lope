import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <SocialContainer>
      <a
        href="https://www.youtube.com/c/jamesqquick"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/learnbuildteach/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/learnbuildteach"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </SocialContainer>
  );
}

const SocialContainer = styled.div`
  background: #e48838;
  padding: 25px 50px;
  margin-right: 15px;

  a.social {
  margin: 0 1rem;
  
  transition: transform 250ms;
  display: inline-block;
}

a.social:hover {
  transform: translateY(-5px);
}

a.youtube {
  color: #eb3223;
}

a.facebook {
  color: #4968ad;
}

a.twitter {
  color: #49a1eb;
}

a.instagram {
  color: black;
}


`;
