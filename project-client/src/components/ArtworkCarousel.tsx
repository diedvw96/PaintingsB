import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { artwork } from './ArtworkMockData';

const ArtworkCarousel: React.FC = () => {
  const theme = useTheme();
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
      <div className='carousel-item'>
        <img 
            src={artwork[getIndex(activeStep)].imgSrc} 
            alt={artwork[getIndex(activeStep)].title} 
            style={{ maxWidth: '375px', marginRight: '10px' }}
        />
        <img 
            src={artwork[getIndex(activeStep + 1)].imgSrc} 
            alt={artwork[getIndex(activeStep + 1)].title} 
            style={{ maxWidth: '375px', marginRight: '10px' }}
        />
        <img 
            src={artwork[getIndex(activeStep + 2)].imgSrc} 
            alt={artwork[getIndex(activeStep + 2)].title} 
            style={{ maxWidth: '375px' }}
        />
      </div>
      <div className='carousel-item'>
        <MobileStepper        
          steps={artwork.length}
          position="static"
          activeStep={activeStep}
          sx={{ maxWidth: 375, flexGrow: 1 }}
          nextButton={
            <Button size="small" onClick={handleNext}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </div>
    </div> 
  );
}

export default ArtworkCarousel;
