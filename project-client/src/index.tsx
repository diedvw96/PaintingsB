import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './style/theme';
import './style/styles.css';
import { Button, CssBaseline } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Root() {
  const [open, setOpen] = useState<boolean>(false); // Specify the type of the state

  const toggleDrawer = (): void => {
    setOpen(prevOpen => !prevOpen);
  };
  
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Get localstorage data if present
  useEffect(()=> {
    const data = window.localStorage.getItem('PAINTING_DARKMODE')
    if(data !== null){
      setDarkMode(JSON.parse(data))
    }
  }, [])

  //set localstorage data
  useEffect(() => {
    window.localStorage.setItem('PAINTING_DARKMODE', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <React.StrictMode>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <App toggleDrawer={toggleDrawer} open={open} />
        <Button onClick={toggleDarkMode} 
        style={{
              position: 'absolute',
              top: 10,
              right: 10,
              zIndex: 9999, 
            }}>
          {darkMode ? <LightModeIcon/> : <DarkModeIcon/> }
        </Button>
      </ThemeProvider>
    </React.StrictMode>
  );
}

const rootElement = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(rootElement).render(<Root />);

