import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';

const Profile: React.FC = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>About the Artist</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              image="https://placehold.co/320x200/EEE/31343C"
              alt="Artist Image"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>Biography</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac turpis nisi. 
            Praesent interdum ligula id quam aliquam, sed auctor nisi ultrices.
          </Typography>
          <Typography paragraph>
            Fusce at est ac elit commodo fermentum. Cras euismod, libero ut imperdiet vehicula, 
            lorem augue facilisis dolor, nec tincidunt magna purus ac quam.
          </Typography>
          <Typography paragraph>
            Sed vitae justo vel justo eleifend dapibus. Nullam at velit nec neque congue tincidunt 
            vitae eget orci. Morbi eu felis a tortor feugiat blandit nec quis urna.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              image="https://placehold.co/320x200/EEE/31343C"
              alt="Artwork 1"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula mi id lorem cursus, 
                non malesuada erat pharetra.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              image="https://placehold.co/400x300/EEE/31343C"
              alt="Artwork 2"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Quisque ultricies, lorem id tempus fermentum, magna orci malesuada magna, 
                ut fermentum odio ipsum nec urna.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>Artistic Journey</Typography>
          <Typography paragraph>
            Phasellus fermentum dui a justo eleifend, a dictum nisi posuere. Donec nec odio purus. 
            Suspendisse sit amet libero volutpat, sagittis mi ut, tincidunt tortor. Integer luctus, 
            sapien quis feugiat cursus, nunc sapien vehicula nunc, a blandit neque velit id dui.
          </Typography>
          <Typography paragraph>
            Etiam vehicula eros nec purus lacinia, at congue urna blandit. Nulla facilisi. 
            Proin in justo non sapien tempor vehicula. Vivamus elementum risus ut purus aliquet 
            consequat.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
