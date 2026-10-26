"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  {
    src: "/images/packaging-reference.jpg",
    alt: "Nishaani gift packaging reference showing how each keepsake is carefully wrapped",
    label: "Carefully packed",
  },
  {
    src: "/images/packaging.jpg",
    alt: "Nishaani keepsake gift box with soft wrapping and a thank-you card",
    label: "Gift-ready box",
  },
  {
    src: "/images/transformation-reference.jpg",
    alt: "A personalized couple keepsake created from a favourite photograph",
    label: "Made from your photo",
  },
  {
    src: "/images/keepsake.jpg",
    alt: "Personalized wedding couple keepsake",
    label: "A keepsake to treasure",
  },
  {
    src: "/images/family.jpg",
    alt: "Personalized family keepsake concept",
    label: "Made for your story",
  },
];

export default function CareGallery() {
  const [selectedImage, setSelectedImage] = useState(0);
  const image = galleryImages[selectedImage];

  return (
    <div className="care-gallery">
      <div className="care-gallery-main">
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="(max-width: 760px) 100vw, 52vw"
        />
        <span className="care-gallery-badge">{image.label}</span>
      </div>
      <div
        className="care-gallery-thumbnails"
        role="group"
        aria-label="Explore keepsake and packaging photos"
      >
        {galleryImages.map((thumbnail, index) => (
          <button
            className={`care-gallery-thumbnail${selectedImage === index ? " is-selected" : ""}`}
            type="button"
            aria-label={`Show photo: ${thumbnail.label}`}
            aria-pressed={selectedImage === index}
            onClick={() => setSelectedImage(index)}
            key={thumbnail.src}
          >
            <Image
              src={thumbnail.src}
              alt=""
              fill
              sizes="(max-width: 760px) 20vw, 10vw"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
