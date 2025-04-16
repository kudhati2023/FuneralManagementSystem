
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Paper, CircularProgress, Alert } from '@mui/material';
import { useApiData } from '../../hooks/useApiData';
import { scheduleAPI } from '../../services/api';
import { FuneralEvent } from '../../types';

const FuneralSchedule: React.FC = () => {
  const { data, loading, error } = useApiData<FuneralEvent[]>(
    async () => {
      const response = await scheduleAPI.getFuneralSchedule();
      return response.data.data;
    }
  );

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Paper sx={{ p: 2 }}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={data || []}
        height="auto"
      />
    </Paper>
  );
};

export default FuneralSchedule;
