import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from '@fullcalendar/core/locales/fr';
import TransitionsModal from "./ModalShdle";

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T12:00:00'
  }
]

export function createEventId() {
  return String(eventGuid++)
}

const userList = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
  { id: 3, name: "User 3" },
  { id: 4, name: "User 4" },
  { id: 5, name: "User 5" },
];



const UserCalendar = () => {
  const [isClicked, seisClicked] = useState(false);
  const [currentEvents, setcurrentEvents] = useState([]);
  const [open, setOpen] = React.useState(false);

 
  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }
 const handleEventClick = (clickInfo) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }
  const handleDateSelect = (selectInfo) => {
    setOpen(true)
    // let title = prompt('Please enter a new title for your event')
    // let calendarApi = selectInfo.view.calendar

    // calendarApi.unselect() // clear date selection

    // if (title) {
    //   calendarApi.addEvent({
    //     id: createEventId(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay
        
    //   })
    // }
  }
 const handleEvents = (events) => {
    setcurrentEvents(events)
  }
  const handleClose=()=>setOpen(false)

  return (
    <div>
             <TransitionsModal open={open} handleClose={handleClose} />
       
      <div className='demo-app-main'>
          <FullCalendar
          contentHeight={1000}
          height={800}
           aspectRatio={50}
           viewClassNames={"view-full-calendar"}
            allDayContent="cells"
            timeZone={"UTF"}
            titleFormat={{ year: "numeric", month: "long" }}
            // allDayText={"24h"}
            allDaySlot={false}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next',
              center: 'title',
              right: 'dayGridMonth'
            }}
            expandRows= {true}
            locale={esLocale}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventsSet={handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
          </div>
    </div>
  );
};
export default UserCalendar


const UserList = () => {
  return (
    <div className="user-list">
      {userList.map((user) => (
        <div key={user.id} className="user-calendar">
          <UserCalendar user={user} />
        </div>
      ))}
    </div>
  );
};

