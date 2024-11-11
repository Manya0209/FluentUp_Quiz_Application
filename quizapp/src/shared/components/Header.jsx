import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
//import { Register } from '../../modules/user/components/Register';
//import { UserPage } from '../../modules/user/pages/UserPage';
import { Link } from 'react-router-dom';
import { Menu } from './Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useAuth from '../hooks/useAuth';

export const Header = () => {
  const {user} = useAuth();

  // const[showRegister, setShowRegister]= useState(false)

  // const register=()=>{
  //   setShowRegister(true)
  // }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#9C9797' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton> 
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff', fontSize: '25px', fontWeight:'bold' }}>
            FluentUp
          </Typography>

          {user && (
            <IconButton
              color="inherit"
              component={Link}
              to={`/profile/${user.name}`}
              sx={{
                color: '#fff',
                marginRight: '10px',
              }}
            >
              <AccountCircleIcon />
            </IconButton>
          )}

          <Button
            color="inherit"
            component={Link}
            to="/userpage"
            sx={{
              color: '#fff',
              backgroundColor: '#DEB69C',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              ':hover': {
                backgroundColor:  '#CD9692',
              },
            }}>Logout</Button>
        </Toolbar>
      </AppBar>
      {/* {showRegister && <UserPage />} */}
    </Box>
  );
}