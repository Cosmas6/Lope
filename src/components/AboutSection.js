import React from "react";
import styled from "styled-components";
import lopeWorker from "../img/lopeWorker.jpg";
import utilityImage from "../img/utilityImage.jpg";
import infrastructureImage1 from "../img/infrastructureImage1.jpg";
import infrastructureImage2 from "../img/infrastructureImage2.jpg";
import environmentalImage1 from "../img/environmentalImage1.jpg";
import environmentalImage2 from "../img/environmentalImage2.jpg";
import aboutUs from "../img/aboutUs.jpg";
import Construction1 from "../img/Construction1.jpg";
import Construction2 from "../img/Construction2.jpg";
import visionLogo from "../img/visionLogo.png";
import missionLogo from "../img/missionLogo.png";
import valuesLogo from "../img/valuesLogo.png";

const AboutSection = () => {
  return (
    <About>
      <div className="title">
        <h1>ABOUT US</h1>
      </div>

      <Description>
        <div className="image">
          <img src={lopeWorker} alt="" />
        </div>
        <div className="text">
          <span>
            Lope Design & Builders (LDP) is a Civil Engineering and Building
            Contractor agency offering Construction and project management. We
            provides construction and consultancy services ranging from
            individual project to multi-disciplinary “turn key” programs,
            including concept design, complete planning and design services.
          </span>
          <p>
            Our capabilities and experience encompass the broad areas of
            construction and project management, environmental management and
            planning, infrastructure planning and design and utility management
            services.
          </p>
        </div>
      </Description>
      <Purpose>
        <div className="vision">
          <div className="visionLogo">
            <img src={visionLogo} alt="" />
          </div>
          <h1>OUR VISION</h1>
          <p>
            To become the preferred and trusted construction and project
            management services provider in the East Africa region.
          </p>
        </div>
        <div className="mission">
          <div className="missionLogo">
            <img src={missionLogo} alt="" />
          </div>
          <h1>OUR MISSION</h1>
          <p>
            We exist to add value to our clients operations through improving
            their productivity and revenue. This we do through provision of
            customized construction and project management services. Our
            approach is to build a long term and mutually beneficial partnership
            with our clients in whom we make decisions for with the future in
            mind.
          </p>
        </div>
        <div className="coreValues">
          <div className="valuesLogo">
            <img src={valuesLogo} alt="" />
          </div>
          <h1>CORE VALUES</h1>
          <ul>
            <li>Quality service provision</li>
            <li>Teamwork and Integrity</li>
            <li>Customer focus</li>
            <li>A good place for employees to work</li>
            <li>Innovation and quality</li>
            <li>Professionalism and confidentiality in service provision</li>
          </ul>
        </div>
      </Purpose>
      <Services>
        <div className="heading">
          <h1>What services do we offer? </h1>
        </div>
      </Services>

      <Catalog>
        <div className="Construction">
          <h1>CONSTRUCTION & PROJECT MANAGEMENT</h1>

          <div className="image1">
            <img src={Construction1} alt="Construction1" />
            <p>
              Our team has an impressive record of accomplishment of providing
              our clients with proven construction and project management
              services that are both effective and cost-efficient. <br /> We
              offer certified project managers who are very accountable for
              service delivery from project inception right through to closure.
              <br />
              <ul>
                <li>
                  Construction and Project Management where we
                  plan,organize,secure,control and manage resources on behalf of
                  the client.
                </li>
                <li>Project Management training. </li>
                <li>Project Risk Management. </li>
                <li>Procurement Training. </li>
                <li>Planning and scheduling of the project.</li>
              </ul>
            </p>
          </div>

          <div className="image2">
            <img src={Construction2} alt="Construction2" />
            <p>
              <ul>
                <li>
                  Design co-ordination including reporting on cost, information
                  required program and legalities.
                </li>
                <li>
                  Managing, coordinating and supervising the contractors, artist
                  and Consultant team as required to the project cost
                  monitoring.
                </li>
                <li>Preparing monthly status reports on project progress.</li>
                <li>
                  Assisting in collating as installed record drawing and all
                  necessary confirmations of statutory consents.
                </li>
                <li>
                  Organizing, programming and assisting in inspecting completion
                  of any snagging or unfurnished works by contractors and
                  specialists.
                </li>
                <li>
                  Commissioning and if required, marketing the completed
                  projects.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="utility">
          <h1>UTILITY MANAGEMENT SERVICES</h1>
          <div className="backgroundimage"></div>
          <div className="details">
            <p>
              Our capabilities and experience encompass the broad areas of
              utility management and regulatory services. Our team has specific
              capability in leak detection, waste prevention, unaccounted for
              water management and improved sanitation. <br /> The following
              services can be provided, as a complete management solution or as
              a combination of selected products where support is required:
            </p>
            <ul>
              <li>
                Non-Revenue water / unaccounted for water Management / leakage
                surveys
              </li>
              <li>Technical Assistance</li>
              <li>Baseline studies &Performance Monitoring</li>
              <li>Infrastructure operations and management</li>
              <li>
                Infrastructure Capital Expansion, Upgrading, Refurbishment and
                Maintenance
              </li>
              <li>Water Demand Management</li>
              <li>Information Systems planning, design and implementation</li>
              <li>
                Quality of supply and quality of service investigations,
                implementation strategies
              </li>
            </ul>
          </div>
        </div>
        <div className="infrastructure">
          <h1>INFRASTRUCTURE PLANNING & DESIGN</h1>
          <div className="backgroundimage1">
            <div className="backgroundimage2"></div>
          </div>

          <div className="details">
            <p>
              LDB team has proven capability and expertise in water and
              sanitation Infrastructure development. <br /> We are familiar with
              complex regulatory and compliance requirements as well as
              traditional design standards th e latest construction materials
              and rehabilitation technologies.
            </p>
            <ul>
              <p>We provide the following services:</p>
              <li>
                Water distribution networks and Sewerage analysis, design and
                rehabilitation studies
              </li>
              <li>Master Plans</li>
              <li>Needs Studies</li>
              <li>Design of Treatment Processes</li>
            </ul>
          </div>
        </div>
        <div className="environmental">
          <h1>ENVIRONMENTAL MANAGEMENT & PLANNING</h1>
          <div className="backgroundimage1">
            <div className="backgroundimage2"></div>
          </div>
          <div className="details">
            <p>
              Environmental management capabilities encompass a broad range of
              services to public and private sector clients, required to prepare
              for,and achieve compliance with the growing body of environmental
              legislation and regulations.
            </p>
            <ul>
              <p>We provide services in:</p>
              <li>Environmental Impact Assessments.</li>
              <li>Solid Waste Management</li>
            </ul>
          </div>
        </div>
      </Catalog>
    </About>
  );
};

const About = styled.div`
  .title {
    line-height: 3;
    justify-content: space-evenly;
    color: #ffff;
    text-align: center;
    padding: 30px auto 30px auto;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
      url(${aboutUs});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 80vh;

    h1 {
      padding-top: 12rem;
      font-size: 50px;
    }
  }

  @media screen and (max-width: 550px) {
    .title {
      height: 70vh;
      h1 {
        padding: 10rem 4rem;
        font-size: 10vw;
      }
    }
  }

  @media screen and (max-width: 420px) {
    .title {
      background-position: left center;
      h1 {
        padding: 12rem 4rem;
        font-size: 10vw;
      }
    }
  }

  @media screen and (max-width: 370px) {
    .title {
      h1 {
        padding: 11rem 3rem;
        font-size: 10vw;
      }
    }
  }
`;

const Description = styled.div`
  padding: 15rem 5rem 2rem 5rem;
  display: flex;
  .image {
    img {
      width: 50vw;
      object-fit: contain;
      align-self: flex-start;
      animation: fadeInLeft 3s;
    }
  }

  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .text {
    text-align: center;
    padding-left: 3rem;
    flex: 1 1 auto;
    width: 39vw;
    line-height: 2;
    p {
      padding-top: 5rem;
    }
  }
  @media screen and (max-width: 800px) {
    padding: 15rem 0rem 5rem 0rem;
    display: block;
    .image {
      img {
        width: 100vw;
        object-fit: contain;
        align-self: flex-start;
      }
    }
    .text {
      padding: 1rem 1rem;
      width: auto;
      line-height: 1.5;
      p {
        padding-top: 2rem;
      }
    }
  }

  @media screen and (max-width: 550px) {
    padding: 15rem 0rem 5rem 0rem;
    display: block;
    .image {
      img {
        width: 100vw;
        object-fit: contain;
        align-self: flex-start;
      }
    }
    .text {
      padding: 1rem 1rem;
      width: auto;
      line-height: 1.5;
      p {
        padding-top: 2rem;
      }
    }
  }

  @media screen and (max-width: 420px) {
    .title {
      background-position: left center;
      h1 {
        padding: 12rem 4rem;
        font-size: 10vw;
      }
    }
  }

  @media screen and (max-width: 370px) {
    .title {
      h1 {
        padding: 11rem 3rem;
        font-size: 10vw;
      }
    }
  }
`;

const Purpose = styled.div`
  padding: 1rem 5rem 0rem 5rem;
  .vision {
    .visionLogo {
      img {
        width: 100px;
        position: relative;
        top: 4rem;
      }
    }
    h1 {
      color: #f38120;
      position: relative;
      font-size: 3vw;
      padding-bottom: 2rem;
      font-size: 3vw;
      padding-left: 8rem;
    }
  }
  .mission {
    .missionLogo {
      img {
        width: 100px;
        position: relative;
        top: 4.5rem;
      }
    }
    h1 {
      color: #f38120;

      padding-bottom: 2rem;
      font-size: 3vw;
      padding-left: 8rem;
    }
  }
  .coreValues {
    .valuesLogo {
      img {
        width: 100px;
        position: relative;
        top: 4.5rem;
      }
    }
    h1 {
      color: #f38120;
      padding-bottom: 2rem;
      font-size: 3vw;
      padding-left: 8rem;
    }
    ul {
      padding-left: 4rem;
    }
  }

  @media screen and (max-width: 800px) {
    padding: 1rem 5rem 0rem 5rem;
    .vision {
      .visionLogo {
        img {
          width: 100px;
          position: relative;
          top: 4rem;
        }
      }
      h1 {
        color: #f38120;
        padding-bottom: 2rem;
        font-size: 5vw;
        padding-left: 8rem;
      }
    }
    .mission {
      .missionLogo {
        img {
          width: 100px;
          position: relative;
          top: 4.5rem;
        }
      }
      h1 {
        color: #f38120;
        padding-bottom: 2rem;
        font-size: 5vw;
        padding-left: 8rem;
      }
    }
    .coreValues {
      .valuesLogo {
        img {
          width: 100px;
          position: relative;
          top: 4.5rem;
        }
      }
      h1 {
        color: #f38120;
        padding-bottom: 2rem;
        font-size: 5vw;
        padding-left: 8rem;
      }
      ul {
        padding-left: 4rem;
      }
    }
  }

  @media screen and (max-width: 550px) {
    padding: 2rem 0rem 0rem 0rem;
    .vision {
      .visionLogo {
        img {
          width: 100px;
          position: relative;
          top: 4rem;
          left: 3rem;
        }
      }
      h1 {
        color: #f38120;
        padding-bottom: 1rem;
        font-size: 7vw;
        text-align: center;
        padding-left: 1rem;
      }
      p {
        text-align: center;
      }
    }
    .mission {
      .missionLogo {
        img {
          width: 100px;
          position: relative;
          top: 4rem;
          left: 3rem;
        }
      }
      h1 {
        color: #f38120;
        padding-bottom: 1rem;
        text-align: center;
        font-size: 7vw;
        text-align: center;
        padding-left: 2rem;
      }
      p {
        text-align: center;
      }
    }

    .coreValues {
      .valuesLogo {
        img {
          width: 100px;
          position: relative;
          top: 4rem;
          left: 3rem;
        }
      }
      h1 {
        color: #f38120;
        padding-bottom: 1rem;
        text-align: center;
        font-size: 7vw;
        text-align: center;
        padding-left: 1.5rem;
      }
      p {
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 420px) {
    padding: 2rem 0rem 0rem 0rem;
    .vision {
      .visionLogo {
        img {
          width: 100px;
          position: relative;
          top: 4rem;
          left: 1rem;
        }
      }
      h1 {
        color: #f38120;
        padding-bottom: 2rem;
        font-size: 7vw;
        text-align: center;
        padding-left: 2rem;
      }
      p {
        text-align: center;
      }
    }
    .mission {
      .missionLogo {
        img {
          width: 100px;
          position: relative;
          top: 4rem;
          left: 1rem;
        }
      }
      h1 {
        color: #f38120;
        padding-bottom: 2rem;
        font-size: 7vw;
        text-align: center;
        padding-left: 3rem;
      }
      p {
        text-align: center;
      }
    }

    .coreValues {
      .valuesLogo {
        img {
          width: 100px;
          position: relative;
          top: 4rem;
          left: 1rem;
        }
      }
      h1 {
        color: #f38120;
        padding-bottom: 2rem;
        font-size: 7vw;
        text-align: center;
        padding-left: 2rem;
      }
      p {
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 370px) {
    padding: 2rem 0rem 0rem 0rem;
    .vision {
      .visionLogo {
        img {
          width: 100px;
          position: relative;
          top: 4rem;
          left: 1rem;
        }
      }
      h1 {
        color: #f38120;
        padding-bottom: 2rem;
        font-size: 7vw;
        text-align: center;
        padding-left: 5rem;
      }
      p {
        text-align: center;
      }
    }
    .mission {
      .missionLogo {
        img {
          width: 100px;
          position: relative;
          top: 4rem;
          left: 1rem;
        }
      }
      h1 {
        color: #f38120;
        padding-bottom: 2rem;
        font-size: 7vw;
        text-align: center;
        padding-left: 5rem;
      }
      p {
        text-align: center;
      }
    }

    .coreValues {
      .valuesLogo {
        img {
          width: 100px;
          position: relative;
          top: 4rem;
          left: 1rem;
        }
      }
      h1 {
        color: #f38120;
        padding-bottom: 2rem;
        font-size: 7vw;
        text-align: center;
        padding-left: 5rem;
      }
      p {
        text-align: center;
      }
    }
  }
`;

const Services = styled.div`
  padding-top: 50px;
  .heading {
    text-align: center;
    &:before {
      transform: scaleX(0);
      transition: 0.25s linear;
    }
    &:hover(:before) &:focus(:before) {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`;

const Catalog = styled.div`
  padding: 1rem 5rem 5rem 5rem;
  line-height: 1;

  .Construction {
    h1 {
      text-align: center;
      font-size: 50px;
      padding: 2rem 0 3rem 0;
      color: #f38120;
    }
    .image1 {
      img {
        width: 90vh;
        object-fit: contain;
        display: inline-block;
        vertical-align: top;
      }
      p {
        display: inline-block;
        text-align: center;
        padding-left: 3rem;
        flex: 1 1 auto;
        width: 39vw;
        line-height: 2;
      }
    }
    .image2 {
      padding-bottom: 15rem;
      img {
        float: right;
        width: 90vh;
      }
      p {
        text-align: center;
        padding-left: 3rem;
        flex: 1 1 auto;
        width: 39vw;
        line-height: 2;
      }
    }
  }
  .utility {
    .backgroundimage {
      background-image: url(${utilityImage});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      height: 80vh;
    }
    h1 {
      text-align: center;
      font-size: 50px;
      padding: 2rem 0 3rem 0;
      color: #f38120;
    }
    .details {
      display: flex;
      padding-top: 2rem;
      p {
        flex-basis: 45rem;
        padding: 0 3rem 0 0;
        line-height: 2;
      }
      ul {
        flex-basis: 40rem;
        line-height: 2;
      }
    }
  }
  .infrastructure {
    h1 {
      text-align: center;
      font-size: 50px;
      padding: 2rem 0 3rem 0;
      color: #f38120;
    }
    .backgroundimage1 {
      background-image: url(${infrastructureImage1});
      background-position: left;
      background-repeat: no-repeat;
      background-size: 700px 700px;
      background-attachment: fixed;
      height: 60vh;
    }
    .backgroundimage2 {
      background-image: url(${infrastructureImage2});
      background-position: right;
      background-repeat: no-repeat;
      background-size: 700px 700px;
      background-attachment: fixed;
      height: 60vh;
    }
    .details {
      display: flex;
      padding-top: 2rem;
      p {
        flex-basis: 45rem;
        padding: 0 3rem 0 0;
        line-height: 2;
      }
      ul {
        flex-basis: 40rem;
        line-height: 2;
      }
    }
  }
  .environmental {
    h1 {
      text-align: center;
      font-size: 50px;
      padding: 2rem 0 3rem 0;
      color: #f38120;
    }
    .backgroundimage1 {
      background-image: url(${environmentalImage1});
      background-position: left;
      background-repeat: no-repeat;
      background-size: 700px 700px;
      background-attachment: fixed;
      height: 60vh;
    }
    .backgroundimage2 {
      background-image: url(${environmentalImage2});
      background-position: right;
      background-repeat: no-repeat;
      background-size: 700px 700px;
      background-attachment: fixed;
      height: 60vh;
    }
    .details {
      display: flex;
      padding-top: 2rem;
      p {
        flex-basis: 45rem;
        padding: 0 3rem 0 0;
        line-height: 2;
      }
      ul {
        flex-basis: 40rem;
        line-height: 2;
      }
    }
  }

  @media screen and (max-width: 1290px) {
    padding: 1rem 5rem 5rem 5rem;
    line-height: 1;

    .Construction {
      h1 {
        text-align: center;
        font-size: 50px;
        padding: 2rem 0 3rem 0;
        color: #f38120;
      }
      .image1 {
        img {
          width: 60vh;
          object-fit: contain;
          display: inline-block;
          vertical-align: top;
        }
        p {
          display: inline-block;
          text-align: left;
          padding-left: 3rem;
          flex: 1 1 auto;
          width: 39vw;
          line-height: 2;
        }
      }
      .image2 {
        padding-top: 3rem;
        padding-bottom: 15rem;
        img {
          float: right;
          width: 56vh;
        }
        p {
          text-align: left;
          padding-left: 3rem;
          flex: 1 1 auto;
          width: 39vw;
          line-height: 2;
        }
      }
    }
  }

  @media screen and (max-width: 770px) {
    padding: 5rem 0rem 5rem 0rem;
    display: block;
    .Construction {
      h1 {
        text-align: center;
        font-size: 50px;
        padding: 2rem 0 3rem 0;
        color: #f38120;
      }
      .image1 {
        img {
          width: 100%;
          object-fit: contain;
          display: inline-block;
          vertical-align: top;
        }
        p {
          text-align: left;
          line-height: 1.5;
          width: 100%;
          padding-right: 3rem;
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
      }
      .image2 {
        padding-bottom: 5rem;
        img {
          float: right;
          width: 100%;
          padding-bottom: 1rem;
        }
        p {
          text-align: left;
          width: 100%;
          line-height: 1.5;
          padding-right: 3rem;
        }
      }
    }
    .utility {
      h1 {
        text-align: center;
        font-size: 50px;
        padding: 2rem 0 3rem 0;
        color: #f38120;
      }
      .details {
        display: flex;
        padding-top: 2rem;
        p {
          flex-basis: 45rem;
          padding: 0 3rem 0 1rem;
          line-height: 1.5;
        }
        ul {
          flex-basis: 40rem;
          line-height: 1.5;
        }
      }
    }
    .infrastructure {
      h1 {
        text-align: center;
        font-size: 50px;
        padding: 2rem 0 3rem 0;
        color: #f38120;
      }
      .backgroundimage1 {
        background-image: url(${infrastructureImage1});
        background-position: left;
        background-repeat: no-repeat;
        background-size: 51%;
        background-attachment: fixed;
        height: 50vh;
      }
      .backgroundimage2 {
        background-image: url(${infrastructureImage2});
        background-position: right;
        background-repeat: no-repeat;
        background-size: 60%;
        background-attachment: fixed;
        height: 50vh;
      }
      .details {
        display: flex;
        padding-top: 2rem;
        p {
          flex-basis: 45rem;
          padding: 0 3rem 0 1rem;
          line-height: 1.5;
        }
        ul {
          flex-basis: 40rem;
          line-height: 1.5;
        }
      }
    }
    .environmental {
      h1 {
        text-align: center;
        font-size: 50px;
        padding: 2rem 0 3rem 0;
        color: #f38120;
      }
      .backgroundimage1 {
        background-image: url(${environmentalImage1});
        background-position: left;
        background-repeat: no-repeat;
        background-size: 62%;
        background-attachment: fixed;
        height: 50vh;
      }
      .backgroundimage2 {
        background-image: url(${environmentalImage2});
        background-position: right;
        background-repeat: no-repeat;
        background-size: 52%;
        background-attachment: fixed;
        height: 50vh;
      }
      .details {
        display: flex;
        padding-top: 2rem;
        p {
          flex-basis: 45rem;
          padding: 0 3rem 0 1rem;
          line-height: 1.5;
        }
        ul {
          flex-basis: 40rem;
          line-height: 1.5;
        }
      }
    }
  }

  @media screen and (max-width: 550px) {
    padding: 5rem 0rem 5rem 0rem;
    display: block;
    .Construction {
      h1 {
        text-align: center;
        font-size: 50px;
        padding: 2rem 0 3rem 0;
        color: #f38120;
      }
      .image1 {
        img {
          width: 100%;
          object-fit: contain;
          display: inline-block;
          vertical-align: top;
        }
        p {
          text-align: left;
          line-height: 1.5;
          width: 100%;
          padding-right: 3rem;
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
      }
      .image2 {
        padding-bottom: 5rem;
        img {
          float: right;
          width: 100%;
          padding-bottom: 1rem;
        }
        p {
          text-align: left;
          width: 100%;
          line-height: 1.5;
          padding-right: 3rem;
        }
      }
    }
    .utility {
      h1 {
        text-align: center;
        font-size: 50px;
        padding: 2rem 0 3rem 0;
        color: #f38120;
      }
      .details {
        display: flex;
        padding-top: 2rem;
        p {
          flex-basis: 45rem;
          padding: 0 3rem 0 1rem;
          line-height: 1.5;
        }
        ul {
          flex-basis: 40rem;
          line-height: 1.5;
        }
      }
    }
    .infrastructure {
      h1 {
        text-align: center;
        font-size: 50px;
        padding: 2rem 0 3rem 0;
        color: #f38120;
      }
      .backgroundimage1 {
        background-image: url(${infrastructureImage1});
        background-position: left;
        background-repeat: no-repeat;
        background-size: 51%;
        background-attachment: fixed;
        height: 50vh;
      }
      .backgroundimage2 {
        background-image: url(${infrastructureImage2});
        background-position: right;
        background-repeat: no-repeat;
        background-size: 60%;
        background-attachment: fixed;
        height: 50vh;
      }
      .details {
        display: flex;
        padding-top: 2rem;
        p {
          flex-basis: 45rem;
          padding: 0 3rem 0 1rem;
          line-height: 1.5;
        }
        ul {
          flex-basis: 40rem;
          line-height: 1.5;
        }
      }
    }
    .environmental {
      h1 {
        text-align: center;
        font-size: 50px;
        padding: 2rem 0 3rem 0;
        color: #f38120;
      }
      .backgroundimage1 {
        background-image: url(${environmentalImage1});
        background-position: left;
        background-repeat: no-repeat;
        background-size: 62%;
        background-attachment: fixed;
        height: 50vh;
      }
      .backgroundimage2 {
        background-image: url(${environmentalImage2});
        background-position: right;
        background-repeat: no-repeat;
        background-size: 52%;
        background-attachment: fixed;
        height: 50vh;
      }
      .details {
        display: flex;
        padding-top: 2rem;
        p {
          flex-basis: 45rem;
          padding: 0 3rem 0 1rem;
          line-height: 1.5;
        }
        ul {
          flex-basis: 40rem;
          line-height: 1.5;
        }
      }
    }
  }

  @media screen and (max-width: 420px) {
    padding: 5rem 0rem 5rem 0rem;
    display: block;
    .Construction {
      h1 {
        text-align: center;
        font-size: 30px;
        padding: 2rem 0 3rem 0;
        color: #f38120;
      }
      .image1 {
        img {
          width: 100%;
          object-fit: contain;
          display: inline-block;
          vertical-align: top;
        }
        p {
          text-align: left;
          line-height: 1.5;
          width: 100%;
          padding-right: 3rem;
        }
      }
      .image2 {
        padding-bottom: 5rem;
        img {
          float: right;
          width: 100%;
        }
        p {
          text-align: left;
          width: 100%;
          line-height: 1.5;
          padding-right: 3rem;
        }
      }
    }
    .utility {
      h1 {
        text-align: center;
        font-size: 30px;
        padding: 2rem 0 3rem 0;
        color: #f38120;
      }
      .details {
        display: flex;
        padding-top: 2rem;
        p {
          flex-basis: 45rem;
          padding: 0 3rem 0 1rem;
          line-height: 1.5;
        }
        ul {
          flex-basis: 40rem;
          line-height: 1.5;
        }
      }
    }
    .infrastructure {
      h1 {
        text-align: center;
        font-size: 30px;
        padding: 2rem 0 2rem 0;
        color: #f38120;
      }
      .backgroundimage1 {
        background-image: url(${infrastructureImage1});
        background-position: left;
        background-repeat: no-repeat;
        background-size: 51%;
        background-attachment: fixed;
        height: 50vh;
      }
      .backgroundimage2 {
        background-image: url(${infrastructureImage2});
        background-position: right;
        background-repeat: no-repeat;
        background-size: 60%;
        background-attachment: fixed;
        height: 50vh;
      }
      .details {
        display: flex;
        padding-top: 2rem;
        p {
          flex-basis: 45rem;
          padding: 0 3rem 0 1rem;
          line-height: 1.5;
        }
        ul {
          flex-basis: 40rem;
          line-height: 1.5;
        }
      }
    }
    .environmental {
      h1 {
        text-align: center;
        font-size: 30px;
        padding: 2rem 0 2rem 0;
        color: #f38120;
      }
      .backgroundimage1 {
        background-image: url(${environmentalImage1});
        background-position: left;
        background-repeat: no-repeat;
        background-size: 62%;
        background-attachment: fixed;
        height: 50vh;
      }
      .backgroundimage2 {
        background-image: url(${environmentalImage2});
        background-position: right;
        background-repeat: no-repeat;
        background-size: 52%;
        background-attachment: fixed;
        height: 50vh;
      }
      .details {
        display: flex;
        padding-top: 2rem;
        p {
          flex-basis: 45rem;
          padding: 0 3rem 0 1rem;
          line-height: 1.5;
        }
        ul {
          flex-basis: 40rem;
          line-height: 1.5;
        }
      }
    }
  }

  @media screen and (max-width: 370px) {
    padding: 5rem 0rem 5rem 0rem;
    display: block;
    .Construction {
      h1 {
        text-align: center;
        font-size: 30px;
        padding: 2rem 0 3rem 0;
        color: #f38120;
      }
      .image1 {
        img {
          width: 100%;
          object-fit: contain;
          display: inline-block;
          vertical-align: top;
        }
        p {
          text-align: left;
          line-height: 1.5;
          width: 100%;
          padding-right: 3rem;
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
      }
      .image2 {
        padding-bottom: 5rem;
        img {
          float: right;
          width: 100%;
        }
        p {
          text-align: left;
          width: 100%;
          line-height: 1.5;
          padding-right: 3rem;
          padding-top: 1rem;
        }
      }
    }
    .utility {
      h1 {
        text-align: center;
        font-size: 30px;
        padding: 2rem 0 3rem 0;
        color: #f38120;
      }
      .details {
        display: flex;
        padding-top: 2rem;
        p {
          flex-basis: 45rem;
          padding: 0 3rem 0 1rem;
          line-height: 1.5;
        }
        ul {
          flex-basis: 40rem;
          line-height: 1.5;
        }
      }
    }
    .infrastructure {
      h1 {
        text-align: center;
        font-size: 30px;
        padding: 2rem 0 2rem 0;
        color: #f38120;
      }
      .backgroundimage1 {
        background-image: url(${infrastructureImage1});
        background-position: left;
        background-repeat: no-repeat;
        background-size: 51%;
        background-attachment: fixed;
        height: 50vh;
      }
      .backgroundimage2 {
        background-image: url(${infrastructureImage2});
        background-position: right;
        background-repeat: no-repeat;
        background-size: 60%;
        background-attachment: fixed;
        height: 50vh;
      }
      .details {
        display: flex;
        padding-top: 2rem;
        p {
          flex-basis: 45rem;
          padding: 0 3rem 0 1rem;
          line-height: 1.5;
        }
        ul {
          flex-basis: 40rem;
          line-height: 1.5;
        }
      }
    }
    .environmental {
      h1 {
        text-align: center;
        font-size: 30px;
        padding: 2rem 0 2rem 0;
        color: #f38120;
      }
      .backgroundimage1 {
        background-image: url(${environmentalImage1});
        background-position: left;
        background-repeat: no-repeat;
        background-size: 62%;
        background-attachment: fixed;
        height: 50vh;
      }
      .backgroundimage2 {
        background-image: url(${environmentalImage2});
        background-position: right;
        background-repeat: no-repeat;
        background-size: 52%;
        background-attachment: fixed;
        height: 50vh;
      }
      .details {
        display: flex;
        padding-top: 2rem;
        p {
          flex-basis: 45rem;
          padding: 0 3rem 0 1rem;
          line-height: 1.5;
        }
        ul {
          flex-basis: 40rem;
          line-height: 1.5;
        }
      }
    }
  }
`;

export default AboutSection;
