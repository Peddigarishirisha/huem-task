import React from 'react';

function Cards() {
  const total = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
    overFlow: 'hidden',
  };
  const left = {
    display: 'flex',
    width: '600px',
    height: '590px',
    flexDirection: 'column',
    margin: '10px',
    padding: '20px 60px',
    backgroundColor: 'lightBlue',
    border: '2px solid lightBlue',
    position: 'relative',
    borderRadius: '3%',
  };
  const right = {
    display: 'flex',
    width: '600px',
    height: '590px',
    flexDirection: 'column',
    margin: '10px',
    padding: '20px 60px',
    backgroundColor: 'lightYellow',
    border: '2px solid lightYellow',
    position: 'relative',
    borderRadius: '3%',
  };
  const image11 = {
    position: 'absolute',
    bottom: '0px',
    left: '0px',
  };
  const image12 = {
    position: 'absolute',
    bottom: '30px',
    right: '40px',
    backgroundColor: 'lightYellow',
    animation: 'moveRight 5s',
  };
const keyframes = `
@keyframes moveRight {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-400px);
  }
  100% {
    transform: translateX(0);
  }
}
`;

  return (
    <div>
    <style>
    {keyframes}
  </style>

    <div className="total" style={{display:"flex",marginLeft:"150px",gap:"20px",marginTop:"85px"}}>
      <div className="left" style={left}>
        <p style={{ fontSize:'14px' ,fontWeight:'lighter' }}>UPDATES</p>
        <h1>Automatic updates</h1>
        <p>
          there's new Chrome release every four weeks, making it easy to have
          the newest features and a faster, safer web browser.
        </p>
        <p style={{ color: 'blue' }}>Learn about automatic updates</p>
        <div style={image11}>
          <img
            src={'/images/9.png'}
            width={'95%'}
            style={{ borderRadius: '3%' }}
          ></img>
        </div>
      </div>
      <div className="right" style={right}>
        <p>LATEST</p>
        <h1>New from Chrome</h1>
        <p>
          Chrome regularly updates with tools and features that make it faster
          and easier to use.
        </p>
        <a href="#">Learn what's new on Chrome</a>
        <div style={image12}>
          <img src="data:image/jpeg;base64,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"></img>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;