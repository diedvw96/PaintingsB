import React from 'react';
import { artwork } from '../models/ArtworkMockData';

const HomeImageTable: React.FC = () => {
  return (
    <div>
		{artwork.map((item, index) => (
			<div className="collection-item" key={index} style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', }}>
				<img className="collection-img" src={item.imgSrc} alt={item.title} />
				<div className="collection-info">
					<h2>{item.title}</h2>
					<p style={{ margin: 0 }}>{item.description}</p>
				</div>
			</div>
		))}
    </div>
  );
};

export default HomeImageTable;
