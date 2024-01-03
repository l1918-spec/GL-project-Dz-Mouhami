import React from 'react';
import './scheduler.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const MyScheduler = () => {
  const events = [
    {
      title: 'Meeting 1',
      start: new Date(2023, 11, 1, 10, 0),
      end: new Date(2023, 11, 1, 12, 0),
    },
    {
      title: 'Meeting 2',
      start: new Date(2023, 11, 2, 14, 0),
      end: new Date(2023, 11, 2, 16, 0),
    },
    {
        title: 'Meeting 3',
        start: new Date(2023, 10, 28, 14, 0),
        end: new Date(2023, 10, 28, 16, 0),
      },
      {
        title: 'Meeting 4',
        start: new Date(2024, 0, 1, 14, 0),
        end: new Date(2024, 0, 1, 16, 0),
      },
  ];

  return (
    <div>
      <h2>My Scheduler</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={['month', 'week', 'day']}
        defaultView="month"
        toolbar={true}
      />
    </div>
  );
};

export default MyScheduler;
