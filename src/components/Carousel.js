import React from "react";
import Carousel from "react-grid-carousel";
import plot1 from "../img/D68/1.jpg";
import plot2 from "../img/D68/2.jpg";
import plot3 from "../img/D68/3.jpg";
import plot4 from "../img/D68/4.jpg";
import plot5 from "../img/D68/5.jpg";
import plot6 from "../img/D68/6.jpg";

const MyDot = ({ isActive }) => (
  <span
    style={{
      display: "inline-block",
      height: isActive ? "8px" : "5px",
      width: isActive ? "8px" : "5px",
      background: "#1890ff",
    }}
  ></span>
);

const Gallery = () => {
  return (
    <Carousel
    className='Imager'
      cols={1}
      rows={1}
      gap={0}
      loop={true}
      dot={MyDot}
      resizeMode="contain"
      responsiveLayout={[
        {
          breakpoint: 500,
          autoplay: 1000,
        },
      ]}
    >
      <Carousel.Item>
        <img src={plot1} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={plot2} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={plot3} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={plot4} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={plot5} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={plot6} alt="" />
      </Carousel.Item>
    </Carousel>
  );
};



export default Gallery;
