// Banner.jsx
import React from 'react';

const Banner = () => {
  return (
    <div className="hero" style={{ 
      backgroundImage: 'url(/path/to/house-image.jpg)', 
      height: '300px', 
      color: '#fff', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>Admin Dashboard</h1>
    </div>
  );
};

export default Banner;