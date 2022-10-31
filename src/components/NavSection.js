import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {
  Category,
  Home,
  Person,
  Search,
  ShoppingBag,
} from '@mui/icons-material';
import { TextField, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          padding: '0 20px',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              gap: {
                xs: '10px',
                md: '20px',
              },
            }}
          >
            <Tooltip title="Home">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => navigate('/')}
              >
                <Home />
              </IconButton>
            </Tooltip>
            <Tooltip title="Account">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => navigate('/account')}
              >
                <Person />
              </IconButton>
            </Tooltip>
            <Tooltip title="Categories">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{
                  display: {
                    xs: 'none',
                    sm: 'inline-block',
                  },
                }}
                onClick={() => navigate('/categories')}
              >
                <Category />
              </IconButton>
            </Tooltip>
            <Tooltip title="Cart">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => navigate('/cart')}
              >
                <ShoppingBag />
              </IconButton>
            </Tooltip>
          </Box>

          <Box
            sx={{
              width: {
                sm: '300px',
                md: '400px',
                lg: '500px',
              },
            }}
          >
            <TextField
              variant="filled"
              fullWidth
              sx={{
                display: {
                  xs: 'none',
                  sm: 'inline-block',
                },
              }}
              label={<Search />}
            />
          </Box>
          <Button onClick={() => navigate('/login')} color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
