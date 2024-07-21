import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const ReferralForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    referredBy: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       await axios.get('http://localhost:5000/auth/callback', formData);
      setMessage('Referral submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        referredBy: ''
      });
    } catch (error) {
      setMessage('Error submitting referral. Please try again.');
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
         
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Phone"
            name="phone"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <TextField
            label="Friend mail"
            name="referredBy"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.referredBy}
            onChange={handleChange}
            required
          />
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Box>
        </form>
        {message && <Typography variant="body1" color="error" mt={2}>{message}</Typography>}
      </Box>
    </Container>
  );
};

export default ReferralForm;