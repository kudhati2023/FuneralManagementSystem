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
  Alert,
} from '@mui/material';
import { useApiData } from '../../hooks/useApiData';
import { mortuaryAPI } from '../../services/api';

const DeceasedRecordList = () => {
  const { data: records, loading, error } = useApiData(mortuaryAPI.getDeceasedRecords);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Burial Order</TableCell>
            <TableCell>Date of Death</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records?.map((record) => (
            <TableRow key={record.id}>
              <TableCell>{record.name}</TableCell>
              <TableCell>{record.burial_order_number}</TableCell>
              <TableCell>{new Date(record.removal_date).toLocaleDateString()}</TableCell>
              <TableCell>{record.status}</TableCell>
              <TableCell>
                {/* Add action buttons here */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DeceasedRecordList;