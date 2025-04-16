import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import {
  Dashboard,
  PersonAdd,
  Payment,
  Schedule,
  CalendarMonth,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navigation = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const staffMenuItems = [
    { text: 'Dashboard', icon: <Dashboard />, path: '/staff' },
    { text: 'New Deceased Record', icon: <PersonAdd />, path: '/deceased/new' },
    { text: 'New Payment', icon: <Payment />, path: '/payments/new' },
    { text: 'New Burial Order', icon: <Schedule />, path: '/burial/new' },
  ];

  const familyMenuItems = [
    { text: 'Dashboard', icon: <Dashboard />, path: '/family' },
    { text: 'Calendar', icon: <CalendarMonth />, path: '/calendar' },
  ];

  const menuItems = user?.role === 'staff' ? staffMenuItems : familyMenuItems;

  return (
    <List>
      {menuItems.map((item) => (
        <ListItem
          button
          key={item.text}
          onClick={() => navigate(item.path)}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );
};

export default Navigation;