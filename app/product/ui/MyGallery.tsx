'use client';
import React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface MyGalleryProps {
  images: ReactImageGalleryItem[];
}

const MyGallery: React.FC<MyGalleryProps> = ({ images }) => {
  return <ImageGallery items={images} 
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showNav={false}
                    showBullets={true} 
                    />;
};

export default MyGallery;