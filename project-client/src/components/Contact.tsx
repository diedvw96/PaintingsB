import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Contact: React.FC = () => {
  const handleSendMail = () => {
    window.location.href = 'mailto:artist@example.com';
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>Contact Me</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Personal Information</Typography>
          <Typography>Name: John Doe</Typography>
          <Typography>Email: artist@example.com</Typography>
          <Typography>Phone: +31 6 1234 5678</Typography>
          <Typography>Location: Kunsthal Rotterdam</Typography>
          <Box mt={2}>
            <Button variant="contained" color="primary" onClick={handleSendMail}>
              Send Email
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>Post a Message</Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="Write your message here..."
          />
          <Box mt={2}>
            <Button variant="contained" color="secondary">Post Message</Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>Find Me Here</Typography>
          <LoadScript googleMapsApiKey="AIzaSyBkDeGsBNQtiqIc-3QtkzCb2PiuOyMNvPY">
            <GoogleMap
              mapContainerStyle={{
                width: '100%',
                height: '400px'
              }}
              center={{
                lat: 51.917019,
                lng: 4.484116
              }}
              zoom={15}
            >
              <Marker position={{
                lat: 51.917019,
                lng: 4.484116
              }} />
            </GoogleMap>
          </LoadScript>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
