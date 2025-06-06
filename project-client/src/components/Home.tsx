import React, { useEffect, useRef, useState } from 'react';
import Masonry from 'masonry-layout';
import { imageData } from '../models/ArtworkMockData';

const Home: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  //if grid and images are loaded, set masonry grid
  useEffect(() => {
    if (gridRef.current && imagesLoaded) {
      new Masonry(gridRef.current, {
        itemSelector: '.grid-item',
        columnWidth: 300,
        gutter: 10,
        originLeft: true,
        fitWidth: true,
      });
    }
  }, [imagesLoaded]);

  //try loading all painting images
  //TODO replace mockdata 
  useEffect(() => {
    const loadImage = (url: string) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve();
        img.onerror = reject;
      });
    };

    const loadAllImages = async () => {
      try {
        await Promise.all(imageData.map((url) => loadImage(url)));
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error loading images', error);
      }
    };

    loadAllImages();
  }, []);

  return (
    <div ref={gridRef} className='grid-container' style={{ visibility: imagesLoaded ? 'visible' : 'hidden' }}>
      {imageData.map((imageUrl, index) => (
        <div className="grid-item" key={index}>
          <img src={imageUrl} alt={`${index}`} style={{maxWidth: '300px' }}/>
        </div>
      ))}
    </div>
  );
};

export default Home;
