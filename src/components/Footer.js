import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#f3f8ff">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '100px', height: '100px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="10px" textAlign="center" pb="40px">With ❤️ from IRON GYM</Typography>
  </Box>
);

export default Footer;
