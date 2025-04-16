import React from 'react';
import { Paper, Typography, List, ListItem } from '@mui/material';

const UpcomingFunerals: React.FC = () => {
  return (
    <Paper>
      <Typography variant="h6">Upcoming Funerals</Typography>
      <List>
        <ListItem>No upcoming funerals</ListItem>
      </List>
    </Paper>
  );
};

export default UpcomingFunerals;