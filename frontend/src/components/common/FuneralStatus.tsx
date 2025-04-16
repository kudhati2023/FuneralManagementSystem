import React from 'react';
import { Chip } from '@mui/material';

const FuneralStatus: React.FC<{ status: string }> = ({ status }) => {
  return <Chip label={status} color="primary" />;
};

export default FuneralStatus;