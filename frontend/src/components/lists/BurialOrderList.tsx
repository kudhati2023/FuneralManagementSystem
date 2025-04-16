import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  CircularProgress,
  Alert
} from '@mui/material';
import { useApiData } from '../../hooks/useApiData';
import { burialAPI } from '../../services/api';
import { AxiosResponse } from 'axios';

interface BurialOrder {
  id: number;
  orderNumber: string;
  funeralDate: string;
  status: string;
  deceasedId: number;
  serviceType: string;
  location: string;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

const BurialOrderList: React.FC = () => {
  const { data: response, loading, error } = useApiData(burialAPI.getBurialOrders);
  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  const burialOrders = response?.data?.data || [];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order Number</TableCell>
            <TableCell>Funeral Date</TableCell>
            <TableCell>Service Type</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {burialOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.orderNumber}</TableCell>
              <TableCell>{new Date(order.funeralDate).toLocaleDateString()}</TableCell>
              <TableCell>{order.serviceType}</TableCell>
              <TableCell>{order.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BurialOrderList;