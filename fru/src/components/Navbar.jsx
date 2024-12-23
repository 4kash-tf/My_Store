import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom'; 
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Store
            </Typography>
            <Link to="/pro" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button color="inherit">View Products</Button>
            </Link>
            <Link to="/itm" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button color="inherit">Add Products</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
