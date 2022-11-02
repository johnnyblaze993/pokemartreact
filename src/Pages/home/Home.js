import React from 'react';

import { getAuth } from 'firebase/auth';
import auth from '../../FirebaseConfig';
import { Box } from '@mui/material';
import HeroMain from './HeroMain';
import HomeCards from './HomeCards';

const Home = ({ homeDecor }) => {
  const auth = getAuth();

  return (
    <Box
      sx={{
        height: '100vh',
      }}
    >
      <HeroMain />
      <HomeCards homeDecor={homeDecor} />
    </Box>
  );
};

export default Home;
