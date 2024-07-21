import React from 'react';
import { Modal, Box , } from '@mui/material';
import ReferralForm from './ReferalForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ReferralModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <h2>Refer a Friend</h2>
        <ReferralForm handleClose={handleClose} />
      </Box>
    </Modal>
  );
};

export default ReferralModal;

