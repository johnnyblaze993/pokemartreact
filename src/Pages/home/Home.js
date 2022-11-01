import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import auth from '../../FirebaseConfig';
import { Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import HeroMain from './HeroMain';
import HomeCards from './HomeCards';

const Home = () => {
  const [data, setData] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    axios
      .get('https://botw-compendium.herokuapp.com/api/v2/all?format=json')
      .then((res) => {
        setData(res.data);
      });
  }, []);

  console.log(data);

  return (
    <Box
      sx={{
        height: '100vh',
      }}
    >
      <HeroMain />
      <HomeCards />
    </Box>
  );
};

export default Home;
