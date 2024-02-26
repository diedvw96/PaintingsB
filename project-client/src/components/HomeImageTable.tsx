import React, { useEffect, useRef } from 'react';
import Masonry from 'masonry-layout';

// Sample image data
const imageData = [
  'https://via.placeholder.com/375x300',
  'https://via.placeholder.com/375x200',
  'https://via.placeholder.com/375x100',
  'https://via.placeholder.com/375x100',
  'https://via.placeholder.com/375x600',
  'https://via.placeholder.com/375x300',
  'https://via.placeholder.com/375x300',
  'https://via.placeholder.com/375x200',
  'https://via.placeholder.com/375x100',
  'https://via.placeholder.com/375x100',
  'https://via.placeholder.com/375x600',
  'https://via.placeholder.com/375x300',
  // Add more image URLs as needed
];

const HomeImageTable: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      new Masonry(gridRef.current, {
        itemSelector: '.grid-item',
        columnWidth: 375,
        gutter: 10,    
        originLeft: false,
        fitWidth: true,
      });
    }
  }, []);

  return (
      <div ref={gridRef} className='grid-container'>
        {imageData.map((imageUrl, index) => (
          <div className="grid-item" key={index}>
            <img src={imageUrl} alt={`Image ${index}`}/>
          </div>
        ))}
      </div> 
  );

};

export default HomeImageTable;