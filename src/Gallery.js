import React from "react";

const Gallery = ({ images }) => {
  return (
    <>
      {images.map((img, index) => (
          <div 
            className="image"
            key={index} 
            style={{background: `url("${img.url}") no-repeat center/cover`}}>

          </div>
      ))}
    </>
  );
};

export default Gallery;
