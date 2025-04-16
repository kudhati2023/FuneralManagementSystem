import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import TaskList from '../common/TaskList';
import NotificationPanel from '../common/NotificationPanel';
import UpcomingFunerals from '../common/UpcomingFunerals';

const StaffDashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Staff Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <UpcomingFunerals />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, mb: 2 }}>
            <TaskList />
          </Paper>
          <Paper sx={{ p: 2 }}>
            <NotificationPanel />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StaffDashboard;