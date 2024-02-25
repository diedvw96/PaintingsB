import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: 
  {
    primary: {
      main: '#0A0B0A', // #0A0B0A #303630 #6B766B #B4BBB4 #C9CFC9
    },
    secondary: {
      main: '#303630', 
    },
    background: {
      default: '9FA89F', 
    },
    text: {
      primary: '#0A0B0A', 
      secondary: '#666666', 
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#0A0B0A', 
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
      color: '#0A0B0A', 
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.2,
      color: '#0A0B0A', 
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#0A0B0A', 
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.4,
      color: '#0A0B0A', 
    },
  },
  shape: {
    borderRadius: 8, // Rounded corners
  },
  components: {
    
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Don't uppercase button text
          fontWeight: 600,
          backgroundColor: '#B4BBB4',
          '&:hover': {
            backgroundColor: '#C9CFC9', 
          } 
        },
      },
    },
    
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none', // No shadow for app bar
          borderBottom: '1px solid #ddd', // Border bottom for app bar
        },
      },
    },
    
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: '#C8D0C9',
          "& .MuiInputBase-input": {
            height: '10px',
          },         
        },
      },
    },
    
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'grey', // Change label color
          bottom: '12px', // Adjust label position
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: 'bold', // Example: Set font weight to bold
          color: '#333333', // Text color
          backgroundColor: '#C8D0C9', // Background color
          '&.Mui-selected': {
            // Styles when the tab is selected
            color: '#2E3532', // Text color when selected
            backgroundColor: '#7E9181', // Background color when selected
          },
          '&:hover': {
            // Styles on hover
            backgroundColor: '#9CAB9E', // Background color on hover
          },
        },
      },
    },
  },
});

export default theme;
