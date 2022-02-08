import "./App.css";
import React, { useState } from "react";
import Gallery from "./Gallery";

const App = () => {
  const [images, setImages] = useState([
    { url: "https://source.unsplash.com/random/1" },
    { url: "https://source.unsplash.com/random/2" },
    { url: "https://source.unsplash.com/random/3" },
    { url: "https://source.unsplash.com/random/4" },
    { url: "https://source.unsplash.com/random/5" },
    { url: "https://source.unsplash.com/random/6" },
  ]);

  const addRandomImage = () => {
    setImages([...images, {
      url: `https://source.unsplash.com/random/${Math.floor(Math.random() * 100)}`
    }])
  }

  const removeImage = () => {
    setImages(images.slice(0, images.length - 1));
  }

  return (
    <section className="container">
      <div className="gallery">
        <Gallery images={images}/>
      </div>
      <div className="btn-container">
        <button onClick={removeImage}>Remove</button>
        <button onClick={addRandomImage}>Add Image</button>
      </div>
    </section>
  );
}

export default App;
