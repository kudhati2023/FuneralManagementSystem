import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Typography, Paper, Checkbox } from '@mui/material';

const TaskList = ({ tasks = [] }) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Tasks
      </Typography>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={task.completed}
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText
              primary={task.title}
              secondary={task.dueDate}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TaskList;