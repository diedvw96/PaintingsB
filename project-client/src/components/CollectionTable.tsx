import React, { useEffect, useRef } from 'react';
import Masonry from 'masonry-layout';
import { artwork } from './ArtworkMockData';

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
      {artwork.map((item, index) => (
        <div className="grid-item" key={index} style={{ display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'  , border: '4px solid #ccc', padding: '5px', marginBottom: '20px', }}>
          <img src={item.imgSrc} alt={item.title} style={{ width: '50%' }} />
          <div style={{ width: '50%', padding: '10px' }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div> 
  );
};

export default HomeImageTable;

