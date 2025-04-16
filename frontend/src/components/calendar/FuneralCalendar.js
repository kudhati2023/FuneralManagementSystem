import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Paper, Box } from '@mui/material';

const FuneralCalendar = ({ events, onEventClick, onDateSelect }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Paper sx={{ p: 2 }}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventClick={onEventClick}
          selectable={true}
          select={onDateSelect}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay'
          }}
        />
      </Paper>
    </Box>
  );
};

export default FuneralCalendar;