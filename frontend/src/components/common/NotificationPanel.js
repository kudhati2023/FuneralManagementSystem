import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Typography, Paper } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NotificationPanel = ({ notifications = [] }) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Notifications
      </Typography>
      <List>
        {notifications.map((notification) => (
          <ListItem key={notification.id}>
            <ListItemIcon>
              <NotificationsIcon color={notification.priority} />
            </ListItemIcon>
            <ListItemText
              primary={notification.message}
              secondary={notification.timestamp}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default NotificationPanel;