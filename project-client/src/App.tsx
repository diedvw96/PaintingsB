import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button, Grid, Stack, useMediaQuery, Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Home from './components/Home';
import Collection from './components/Collection';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Shop from './components/Shop';
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';


interface AppProps {
  toggleDrawer: () => void; 
  open: boolean; 
}

function App({ toggleDrawer, open }: AppProps): JSX.Element {
  const isLaptop = useMediaQuery('(max-width:1800px)');
  const isMobile = useMediaQuery('(max-width:1000px)');
  return (
    <Stack className='main-body'>
      <Router>
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
                {isMobile ? 'Berry': 'Berry Doekemeijer'}
              </Typography>
              {isLaptop ? (
                <Button onClick={toggleDrawer} color="inherit">
                  <MenuIcon />
                </Button>
              ) : (
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Button color="inherit" component={Link} to="/">Home</Button>
                  <Button color="inherit" component={Link} to="/collection">Collection</Button>
                  <Button color="inherit" component={Link} to="/shop">Shop</Button>
                  <Button color="inherit" component={Link} to="/profile">Profile</Button>
                  <Button color="inherit" component={Link} to="/contact">Contact</Button>
                </div>
              )}
              <Drawer open={open} onClose={toggleDrawer}>
                <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
                  <List>
                    {['', 'Collection', 'Shop', 'Profile', 'Contact'].map((text, index) => (
                      <ListItem key={text} disablePadding component={Link} to={`/${text.toLowerCase()}`}>
                        <ListItemButton>
                          <ListItemIcon>
                            {index === 0 && <HomeIcon />}
                            {index === 1 && <CollectionsIcon />}
                            {index === 2 && <StoreIcon />}
                            {index === 3 && <PersonIcon />}
                            {index === 4 && <MailIcon />}
                          </ListItemIcon>
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </Toolbar>
          </AppBar>
          <Container sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Routes>
                  <Route path="/" element={<Home />} />
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
