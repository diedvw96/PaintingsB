import * as React from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { artwork } from '../models/ArtworkMockData';

const ArtworkCarousel: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % artwork.length);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + artwork.length) % artwork.length);
  };

  const getIndex = (index: number) => (index + artwork.length) % artwork.length;

  return (
    <div className='carousel'>
        <Button className='carousel-button' size="small" onClick={handleBack}>              
            <KeyboardArrowLeft />               
        </Button>
        <div className='carousel-item'>          
            <img 
                className='carousel-image'
                src={artwork[getIndex(activeStep)].imgSrc} 
                alt={artwork[getIndex(activeStep)].title} 
            />
            <img 
                className='carousel-image-extra'
                src={artwork[getIndex(activeStep + 1)].imgSrc} 
                alt={artwork[getIndex(activeStep + 1)].title} 
            />
            <img 
                className='carousel-image-extra'
                src={artwork[getIndex(activeStep + 2)].imgSrc} 
                alt={artwork[getIndex(activeStep + 2)].title} 
            />
        </div>
        <Button className='carousel-button' size="small" onClick={handleNext}>              
            <KeyboardArrowRight />               
        </Button>
    </div> 
  );
}

export default ArtworkCarousel;
