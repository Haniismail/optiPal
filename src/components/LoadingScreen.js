import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import { Box, LinearProgress } from '@mui/material';

const LoadingScreen = () => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div>
      <Box width={400}>
        <LinearProgress />
      </Box>
    </div>
  );
};

export default LoadingScreen;
