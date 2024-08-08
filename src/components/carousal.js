import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './navbar.css';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" className="my-carousel">
      <Carousel.Item>
        <video width="100%" autoPlay loop muted>
          <source src="/images/video.mp4" type="video/mp4" />
        </video>
        <Carousel.Caption>
          {/* Add captions if needed */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/10.png" className="d-block w-100" alt="Image 10" />
        <Carousel.Caption>
          {/* Add captions if needed */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/11.png" className="d-block w-100" alt="Third slide" />
        <Carousel.Caption>
          {/* Add captions if needed */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
