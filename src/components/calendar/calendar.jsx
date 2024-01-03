import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the styles (adjust the path as needed)

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <div>
      <h1>React Calendar Example</h1>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
};

export default MyCalendar;
