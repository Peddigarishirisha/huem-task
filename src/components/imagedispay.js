import React, { useEffect, useState } from 'react';
import DarkVariantExample from './carousal';
import { IoIosTimer } from "react-icons/io";

const SequentialImageDisplay = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = [
    '/images/1.webp',
    '/images/1.webp',
    '/images/5.webp',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (




    <div>
        <h1 className='make'>Make it <span>yours</span> and take <br></br><span className='it'>it with you</span></h1>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          style={{
            width: '950px',
            height: 'auto',
            marginLeft:'400px',
            display: index === activeImageIndex ? 'block' : 'none',
            transition: 'opacity 1s ease-in-out',
          }}
        />
      ))}

<h1 className='middletext'> The <span className='fastbutton'> <IoIosTimer />fast</span> way to do<br></br> <span className='things'>things online</span> </h1>

<DarkVariantExample></DarkVariantExample>


<p className='take'>Take your browser with you</p>
    </div>



  );
};

export default SequentialImageDisplay;
