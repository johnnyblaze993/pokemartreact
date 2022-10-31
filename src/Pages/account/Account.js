import React from 'react';
//import auth from FirebaseConfig.js

import { getAuth } from 'firebase/auth';
import { Box, Typography } from '@mui/material';

const Account = () => {
  //get the current user
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user);

  return (
    <Box>
      <Typography variant="h4"> Hello, {user.displayName} </Typography>
    </Box>
  );
};

export default Account;
