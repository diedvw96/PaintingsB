import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#C7C7C7', // Grey-green primary color
    },
    secondary: {
      main: '#C9CFC9', // Lighter grey for secondary color
    },
    background: {
      default: '#FFFFFF', // White background
    },
    text: {
      primary: '#1F1F1F', // Dark text color for primary text
      secondary: '#383838', // Darker text color for secondary text
    },
  },
  typography: {
    fontFamily: [
      'Algerian',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#1F1F1F', // Dark text color
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
      color: '#1F1F1F', // Dark text color
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.2,
      color: '#1F1F1F', // Dark text color
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#1F1F1F', // Dark text color
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.4,
      color: '#1F1F1F', // Dark text color
    },
  },
  shape: {
    borderRadius: 8, 
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: '16px',
          backgroundColor: '#C7C7C7', // Lighter background
          color: '#1F1F1F', // Dark text color
          padding: '10px 20px',
          position: 'relative',
          overflow: 'hidden',
          transition: 'color 0.3s, background-color 0.3s',
          '&:hover': {
            backgroundColor: '#C9CFC9', // Lighter background on hover
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            // backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=")', // Add texture image URL here
            opacity: 0.1, // Adjust opacity as needed
            pointerEvents: 'none',
            zIndex: 0,
          },
          '& > *': {
            position: 'relative',
            zIndex: 1,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none', 
          borderBottom: '1px solid #ddd', 
        },
      },
    }, 
    MuiStack: {
      styleOverrides: {
        root: {
          backgroundColor: '#C7C7C7'
        }
      }
    }, 
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#C7C7C7' 
        }    
      }
    }
  },
});



export const darkTheme = createTheme({
  palette: 
  {
    primary: {
      main: '#0A0B0A', //grey-green #0A0B0A #303630 #6B766B #B4BBB4 #C9CFC9
    },                 // black-white #1F1F1F #383838 #858585 #7F7F7F #9D9D9D
    secondary: {
      main: '#383838', 
    },
    background: {
      default: '#858585', 
    },
    text: {
      primary: '#FFFFFF', 
      secondary: '#FFFFFF', 
    },
  },
  typography: {
    fontFamily: [
      'Algerian',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#FFFFFF', 
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
      color: '#FFFFFF', 
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.2,
      color: '#FFFFFF', 
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#FFFFFF', 
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.4,
      color: '#FFFFFF', 
    },
  },
  shape: {
    borderRadius: 8, 
  },
  components: {    
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: '16px',
          backgroundColor: '#0A0B0A', // Black background
          color: '#ffffff', // White text        
          padding: '10px 20px', 
          position: 'relative',
          overflow: 'hidden',
          transition: 'color 0.3s, background-color 0.3s',
          '&:hover': {
            backgroundColor: '#1F1F1F', // Darker shade of gray on hover
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            // backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=")',
            opacity: 0.1,
            pointerEvents: 'none',
            zIndex: 0,
          },
          '& > *': {
            position: 'relative',
            zIndex: 1,
          },
        },
      },
    },
    
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none', 
          borderBottom: '1px solid #ddd', 
        },
      },
    },
    
    MuiStack: {
      styleOverrides: {
        root: {
          backgroundColor: '#0A0B0A'
        }
      }
    }, 
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1F1F1F' 
        }    
      }
    } 
  },
});

