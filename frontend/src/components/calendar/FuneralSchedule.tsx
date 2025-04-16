import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Paper, CircularProgress, Alert } from '@mui/material';
import { useApiData } from '../../hooks/useApiData';
import { scheduleAPI } from '../../services/api';

interface FuneralEvent {
  id: number;
  title: string;
  start: string;
  end: string;
  location: string;
}

const FuneralSchedule: React.FC = () => {
  const { data: events = [], loading, error } = useApiData(scheduleAPI.getFuneralSchedule);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Paper sx={{ p: 2 }}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        height="auto"
      />
    </Paper>
  );
};

export default FuneralSchedule;
