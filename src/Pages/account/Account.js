import React from 'react';

import { getAuth } from 'firebase/auth';
import { Box, Button, Paper, Typography } from '@mui/material';

const Account = () => {
  //get the current user
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <Box>
      <Typography variant="h4">
        {' '}
        <br /> {user?.displayName}
        <Paper
          sx={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '100%',
          }}
        >
          <Button variant="contained">Your orders</Button>
        </Paper>
      </Typography>
    </Box>
  );
};

export default Account;
