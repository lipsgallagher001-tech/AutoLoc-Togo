import React, { useState } from 'react';

interface VehicleGalleryProps {
  images: string[];
  vehicleName: string;
}

const VehicleGallery: React.FC<VehicleGalleryProps> = ({ images, vehicleName }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section className="rounded-xl overflow-hidden shadow-sm bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
      <div className="relative group">
        <img
          className="w-full aspect-[16/9] object-cover"
          alt={`Main view of ${vehicleName}`}
          src={images[selectedImage]}
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`size-2 rounded-full cursor-pointer transition-all ${
                index === selectedImage ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setSelectedImage(index)}
            ></span>
          ))}
        </div>
      </div>
      {/* Thumbnails Carousel */}
      <div className="flex gap-3 p-4 overflow-x-auto scrollbar-hide">
        {images.map((image, index) => (
          <img
            key={index}
            className={`w-32 aspect-video object-cover rounded-lg cursor-pointer transition-all ${
              index === selectedImage
                ? 'border-2 border-primary'
                : 'opacity-70 hover:opacity-100'
            }`}
            alt={`${vehicleName} view ${index + 1}`}
            src={image}
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default VehicleGallery;
