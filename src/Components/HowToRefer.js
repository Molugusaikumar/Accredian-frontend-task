import React from 'react';
import { Box, Typography } from '@mui/material';

const HowToRefer = () => {
  return (
    <Box
      sx={{
        border: '2px solid #000',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
        background: 'linear-gradient(145deg, #e0e0e0, #ffffff)',
        boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff',
        marginTop: '24px', // Add margin at the top
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom align="center" fontSize={50}>
        How to Refer
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '16px',
        }}
      >
        <Box
           sx={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'linear-gradient(145deg, #3f51b5, #283593)',
            boxShadow: '4px 4px 8px #1c2331, -4px -4px 8px #3f51b5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            textAlign: 'center',
            padding: '16px',
          }}
        >
          <Typography variant="body1" component="p">
            Submit referrals easily via our website's referral section
          </Typography>
        </Box>
        <Box
           sx={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'linear-gradient(145deg, #3f51b5, #283593)',
            boxShadow: '4px 4px 8px #1c2331, -4px -4px 8px #3f51b5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            textAlign: 'center',
            padding: '16px',
          }}
        >
          <Typography variant="body1" component="p">
            Earn rewards once your referral join an Accredian program
          </Typography>
        </Box>
        <Box
           sx={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'linear-gradient(145deg, #3f51b5, #283593)',
            boxShadow: '4px 4px 8px #1c2331, -4px -4px 8px #3f51b5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            textAlign: 'center',
            padding: '16px',
          }}
        >
          <Typography variant="body1" component="p">
            Both parties recieve a bonus 30 days after program enrollment
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HowToRefer;
