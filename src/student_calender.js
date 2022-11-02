import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from  "date-fns/format";
import parse from 'date-fns/parse';
import startOfWeek  from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from 'react';
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './styles/App.css';


//Implementing and setting the Time/Day according to INDIAN Clock
const locales = {
  "en-IN": require("date-fns/locale/en-IN")
}

//Initialising all the imports into the Calendar
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})


//Setting the Events in the Calendar
const events = [
  {
    title: "College Interaction",
    allDay: true,
    start: new Date(2021,6,4),
    end: new Date(2021,6,4)
  },

  {
    title: "India Match",
    allDay: true,
    start: new Date(2021,6,8),
    end: new Date(2021,6,9)
  },

  {
    title: "Amazon Interview",
    allDay: true,
    start: new Date(2021,6,12),
    end: new Date(2021,6,13)
  },
]



function App() {
  const[newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
  const[allEvents, setallEvents] = useState(events)

  function handleAddEvent(){
    setallEvents([...allEvents, newEvent])
  }

  return (
    <div className="App">
      <h1>Calendar</h1>
      <h2>Add new Event</h2>
      <div>
        <input type="text" 
        placeholder='Add Title' 
        style={{width: "20%", marginRight: "10px"}}
        value={newEvent.title} onChange={(e)=> setNewEvent({...newEvent, title: e.target.value})}
        />

        <Datepicker placeholderText="Start Date" style ={{marginRight: "10px"}}
        selected ={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})} />

        <Datepicker placeholderText="End Date" style ={{marginRight: "10px"}}
        selected ={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})} />

        <button style={{marginTop: "10px"}} onClick={handleAddEvent}>
          Add the Event
        </button>

      </div>

      <Calendar localizer={localizer} 
      events = {allEvents} 
      startAccessor="start" endAccessor="end" style={{height: 500, margin: "50px"}}>

      </Calendar>
    </div>
  );
}

export default App;