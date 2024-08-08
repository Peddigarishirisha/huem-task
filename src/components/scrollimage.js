import React, { useState } from 'react';

const HorizontalImageDisplay = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseOver = (index) => setHoverIndex(index);
  const handleMouseOut = () => setHoverIndex(null);

  const imageStyles = (index) => ({
    width: index === 2 ? '650px' : index === 4 ? '300px' : '250px',
    height: '580px',
    marginLeft: index === 0 ? '-50px' : '10px',
    marginRight: '10px',
    transition: 'transform 1s ease, box-shadow 0.4s ease',
    transform: hoverIndex === index ? 'scale(1.1) translate(20px, -20px)' : 'none',
    boxShadow: hoverIndex === index ? '0 8px 16px rgba(0, 0, 0, 0.3)' : 'none',
  });

  return (
    <>
      <style>
        {`
          @keyframes scrollAnimation {
            0% { transform: translateX(0); }
            50% { transform: translateX(10px); }
            100% { transform: translateX(0); }
          }
        `}
      </style>

      <div style={{
        display: 'flex',
        gap: '20px', // Adjust spacing between images
        alignItems: 'center',
        width: '100%',
        overflow: 'hidden',
        marginTop: '450px',
      }}>
        <img 
          src='/images/1.webp'
          alt="Image 1" 
          style={imageStyles(0)}
          onMouseOver={() => handleMouseOver(0)}
          onMouseOut={handleMouseOut}
        />
        <img 
          src='/images/2.webp'
          alt="Image 2" 
          style={imageStyles(1)}
          onMouseOver={() => handleMouseOver(1)}
          onMouseOut={handleMouseOut}
        />
        <img 
          src='/images/3.webp'
          alt="Image 3" 
          style={imageStyles(2)}
          onMouseOver={() => handleMouseOver(2)}
          onMouseOut={handleMouseOut}
        />
        <img 
          src='/images/4.webp'
          alt="Image 4" 
          style={imageStyles(3)}
          onMouseOver={() => handleMouseOver(3)}
          onMouseOut={handleMouseOut}
        />
        <img 
          src='/images/5.webp'
          alt="Image 5" 
          style={imageStyles(4)}
          onMouseOver={() => handleMouseOver(4)}
          onMouseOut={handleMouseOut}
        />
      </div>

    </>
  );
};

export default HorizontalImageDisplay;
