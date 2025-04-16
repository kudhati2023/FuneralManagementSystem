import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import FuneralStatus from '../common/FuneralStatus';
import PaymentStatus from '../common/PaymentStatus';

const FamilyDashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Family Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <FuneralStatus />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <PaymentStatus />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FamilyDashboard;