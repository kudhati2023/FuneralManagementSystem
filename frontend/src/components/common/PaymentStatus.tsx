import React from 'react';
import { Chip } from '@mui/material';

const PaymentStatus: React.FC<{ status: string }> = ({ status }) => {
  return <Chip label={status} color="primary" />;
};

export default PaymentStatus;