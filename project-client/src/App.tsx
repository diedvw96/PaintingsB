import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button, Grid, Stack } from '@mui/material';
import Home from './components/Home';
import Collection from './components/Collection';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Shop from './components/Shop';

function App() {
  return (
    <Stack className='main-body'>
      <Router>
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
                Berry Doekemeijer
              </Typography>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/collection">Collection</Button>
                <Button color="inherit" component={Link} to="/shop">Shop</Button>
                <Button color="inherit" component={Link} to="/profile">Profile</Button>
                <Button color="inherit" component={Link} to="/contact">Contact</Button>
              </div>
            </Toolbar>
          </AppBar>
          <Container sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}> 
                <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/collection" element={<Collection />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>                            
              </Grid>
            </Grid>
          </Container>
        </div>
      </Router>
    </Stack>
  );
}

export default App;
