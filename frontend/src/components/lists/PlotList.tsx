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
import { plotAPI } from '../../services/api';

interface Plot {
  id: number;
  plotNumber: string;
  section: string;
  status: string;
  price: number;
}

const PlotList: React.FC = () => {
  const { data: plots, loading, error } = useApiData<Plot[]>(plotAPI.getPlots);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Plot Number</TableCell>
            <TableCell>Section</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {plots?.map((plot) => (
            <TableRow key={plot.id}>
              <TableCell>{plot.plotNumber}</TableCell>
              <TableCell>{plot.section}</TableCell>
              <TableCell>{plot.status}</TableCell>
              <TableCell>${plot.price.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PlotList;
