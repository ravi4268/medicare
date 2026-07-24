import React, { useState } from "react";
import "./Gallery.css";

const images = [
  {
    title: "Hospital",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Doctor",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Nurse",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Laboratory",
    image:
      "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Emergency",
    image:
      "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1000&q=80",
  },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery">

      <h1>🏥 Medical Gallery</h1>

      <div className="gallery-grid">

        {images.map((item, index) => (

          <div className="gallery-card" key={index}>

            <img src={item.image} alt={item.title} />

            <div className="card-body">

              <h3>{item.title}</h3>

              <button
                className="view-btn"
                onClick={() => setSelectedImage(item)}
              >
                View Image
              </button>

            </div>

          </div>

        ))}

      </div>

      {selectedImage && (

        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)}
        >

          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <span
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </span>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <h2>{selectedImage.title}</h2>

          </div>

        </div>

      )}

    </div>
  );
}

export default Gallery;