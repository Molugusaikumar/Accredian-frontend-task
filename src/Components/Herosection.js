import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import ReferralModal from './ReferalModal';
import HowToRefer from './HowToRefer';

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="hero-section">
      <Box
        sx={{
          border: '2px solid #000',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '16px',
          background: 'linear-gradient(145deg, #e0e0e0, #ffffff)',
          boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            flex: '2'      
          }}
        >
          <Typography variant="h4" component="h1"   fontSize={80}>
            Let's Learn and Earn
          </Typography>
          <Typography variant="body1" fontSize={50}>
            Get a chance to win up to 500
          </Typography>
        </Box>
        <Box
          sx={{
            flex: '2',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img 
            src={`${process.env.PUBLIC_URL}/Refer and earn.jpg`} 
            alt="Referral Promotion" 
            style={{ maxWidth: '100%', height: 'auto', marginLeft: '16px' }}
          />
        </Box>
      </Box>
       <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        sx={{
          padding: '16px 32px',
          fontSize: '18px',
            width: '200px',  // Adjust width as needed
            marginBottom: '24px'
        }}
      >
        Refer Now
      </Button>
        <ReferralModal open={open} handleClose={handleClose} /> 
        <HowToRefer />
        <Button
        variant="contained"
        align="center"
        color="primary"
        onClick={handleOpen}
        sx={{
          padding: '16px 32px',
          fontSize: '18px',
            width: '200px',  // Adjust width as needed
            marginBottom: '24px',
           
        }}
      >
        Refer Now
      </Button>
    </div>
  );
};

export default HeroSection;
