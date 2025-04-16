import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Drawer } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Funeral Management System
          </Typography>
          {user ? (
            <>
              <Typography variant="subtitle1" sx={{ mr: 2 }}>
                {user.name}
              </Typography>
              <Button color="inherit" onClick={() => logout()}>
                Logout
              </Button>
            </>
          ) : (
            <Button color="inherit" onClick={() => navigate('/login')}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      
      {user && (
        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
              marginTop: '64px',
            },
          }}
        >
          <Navigation />
        </Drawer>
      )}
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: '64px',
          marginLeft: user ? '240px' : 0,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;