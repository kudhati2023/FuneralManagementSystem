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
import { scheduleAPI } from '../../services/api';

interface DriverSchedule {
  id: number;
  driverName: string;
  vehicleType: string;
  assignmentDate: string;
  status: string;
}

const DriverSchedule: React.FC = () => {
  const { data: schedules, loading, error } = useApiData<DriverSchedule[]>(scheduleAPI.getDriverSchedule);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Driver Name</TableCell>
            <TableCell>Vehicle Type</TableCell>
            <TableCell>Assignment Date</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedules?.map((schedule) => (
            <TableRow key={schedule.id}>
              <TableCell>{schedule.driverName}</TableCell>
              <TableCell>{schedule.vehicleType}</TableCell>
              <TableCell>{new Date(schedule.assignmentDate).toLocaleDateString()}</TableCell>
              <TableCell>{schedule.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DriverSchedule;