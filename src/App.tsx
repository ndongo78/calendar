import Paper from '@mui/material/Paper';
import {
  Scheduler,
  Resources,
  MonthView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  EditRecurrenceMenu,
  DragDropProvider,
  DateNavigator
} from '@devexpress/dx-react-scheduler-material-ui';

import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import { useState } from 'react';
import "./App.css"

export const appointments = [{
  title: 'Website Re-Design Plan',
  startDate: new Date(2018, 5, 25, 9, 35),
  endDate: new Date(2018, 5, 25, 11, 30),
  id: 0,
  rRule: 'FREQ=DAILY;COUNT=3',
  exDate: '20180628T063500Z,20180626T063500Z',
}, {
  title: 'Book Flights to San Fran for Sales Trip',
  startDate: new Date(2018, 5, 25, 12, 11),
  endDate: new Date(2018, 5, 25, 13, 0),
  id: 1,
  rRule: 'FREQ=DAILY;COUNT=4',
  exDate: '20180627T091100Z',
}, {
  title: 'Install New Router in Dev Room',
  startDate: new Date(2018, 5, 25, 13, 30),
  endDate: new Date(2018, 5, 25, 14, 35),
  id: 2,
  rRule: 'FREQ=DAILY;COUNT=5',
}];


function App() {
 const [currentViewName,setCurrentViewName] =useState("Month")

 console.log(currentViewName)

  return (
   
      <DashboardContent />
    
  )
}

export default App

const ExternalViewSwitcher = ({
  currentViewName,
  onChange,
}) => (
  <RadioGroup
    aria-label="Views"
    style={{ flexDirection: 'row' }}
    name="views"
    value={currentViewName}
    onChange={onChange}
  >
    {/* <FormControlLabel value="Week" control={<Radio />} label="Week" /> */}
    {/* <FormControlLabel value="Work Week" control={<Radio />} label="Work Week" /> */}
    <FormControlLabel value="Month" control={<Radio />} label="Month" />
  </RadioGroup>
);

import React from 'react'
import Demo2 from './components/Demo2';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Template } from '@devexpress/dx-react-core';
import DashboardContent from './pages/HomePage';
import SheduleComponent from './components/SheduleComponent';
import UserListScheduler from './components/UserShudeler';

export  function Demon1() {
  return (
    <React.Fragment>
        <ExternalViewSwitcher
          currentViewName={currentViewName}
          onChange={(e)=>setCurrentViewName(e.target.value)}
        />

        <Paper>
          <Scheduler
            data={[]}
            height={660}
          >
            <ViewState
              defaultCurrentDate={new Date().getDate()}
              currentViewName={currentViewName}
            />
            <WeekView
              startDayHour={1}
              endDayHour={31}
            />
            <WeekView
              name="Work Week"
              excludedDays={[0, 6]}
              startDayHour={9}
              endDayHour={19}
            />
            <MonthView />

            <Appointments />
          </Scheduler>
        </Paper>
      </React.Fragment>
  )
}


 export const users=[
  {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
  "street": "Kulas Light",
  "suite": "Apt. 556",
  "city": "Gwenborough",
  "zipcode": "92998-3874",
  "geo": {
  "lat": "-37.3159",
  "lng": "81.1496"
  }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
  "name": "Romaguera-Crona",
  "catchPhrase": "Multi-layered client-server neural-net",
  "bs": "harness real-time e-markets"
  }
  },
  {
  "id": 2,
  "name": "Ervin Howell",
  "username": "Antonette",
  "email": "Shanna@melissa.tv",
  "address": {
  "street": "Victor Plains",
  "suite": "Suite 879",
  "city": "Wisokyburgh",
  "zipcode": "90566-7771",
  "geo": {
  "lat": "-43.9509",
  "lng": "-34.4618"
  }
  },
  "phone": "010-692-6593 x09125",
  "website": "anastasia.net",
  "company": {
  "name": "Deckow-Crist",
  "catchPhrase": "Proactive didactic contingency",
  "bs": "synergize scalable supply-chains"
  }
  },
  {
  "id": 3,
  "name": "Clementine Bauch",
  "username": "Samantha",
  "email": "Nathan@yesenia.net",
  "address": {
  "street": "Douglas Extension",
  "suite": "Suite 847",
  "city": "McKenziehaven",
  "zipcode": "59590-4157",
  "geo": {
  "lat": "-68.6102",
  "lng": "-47.0653"
  }
  },
  "phone": "1-463-123-4447",
  "website": "ramiro.info",
  "company": {
  "name": "Romaguera-Jacobson",
  "catchPhrase": "Face to face bifurcated interface",
  "bs": "e-enable strategic applications"
  }
  },
  {
  "id": 4,
  "name": "Patricia Lebsack",
  "username": "Karianne",
  "email": "Julianne.OConner@kory.org",
  "address": {
  "street": "Hoeger Mall",
  "suite": "Apt. 692",
  "city": "South Elvis",
  "zipcode": "53919-4257",
  "geo": {
  "lat": "29.4572",
  "lng": "-164.2990"
  }
  },
  "phone": "493-170-9623 x156",
  "website": "kale.biz",
  "company": {
  "name": "Robel-Corkery",
  "catchPhrase": "Multi-tiered zero tolerance productivity",
  "bs": "transition cutting-edge web services"
  }
  },
  {
  "id": 5,
  "name": "Chelsey Dietrich",
  "username": "Kamren",
  "email": "Lucio_Hettinger@annie.ca",
  "address": {
  "street": "Skiles Walks",
  "suite": "Suite 351",
  "city": "Roscoeview",
  "zipcode": "33263",
  "geo": {
  "lat": "-31.8129",
  "lng": "62.5342"
  }
  },
  "phone": "(254)954-1289",
  "website": "demarco.info",
  "company": {
  "name": "Keebler LLC",
  "catchPhrase": "User-centric fault-tolerant solution",
  "bs": "revolutionize end-to-end systems"
  }
  },
  {
  "id": 6,
  "name": "Mrs. Dennis Schulist",
  "username": "Leopoldo_Corkery",
  "email": "Karley_Dach@jasper.info",
  "address": {
  "street": "Norberto Crossing",
  "suite": "Apt. 950",
  "city": "South Christy",
  "zipcode": "23505-1337",
  "geo": {
  "lat": "-71.4197",
  "lng": "71.7478"
  }
  },
  "phone": "1-477-935-8478 x6430",
  "website": "ola.org",
  "company": {
  "name": "Considine-Lockman",
  "catchPhrase": "Synchronised bottom-line interface",
  "bs": "e-enable innovative applications"
  }
  },
  {
  "id": 7,
  "name": "Kurtis Weissnat",
  "username": "Elwyn.Skiles",
  "email": "Telly.Hoeger@billy.biz",
  "address": {
  "street": "Rex Trail",
  "suite": "Suite 280",
  "city": "Howemouth",
  "zipcode": "58804-1099",
  "geo": {
  "lat": "24.8918",
  "lng": "21.8984"
  }
  },
  "phone": "210.067.6132",
  "website": "elvis.io",
  "company": {
  "name": "Johns Group",
  "catchPhrase": "Configurable multimedia task-force",
  "bs": "generate enterprise e-tailers"
  }
  },
  {
  "id": 8,
  "name": "Nicholas Runolfsdottir V",
  "username": "Maxime_Nienow",
  "email": "Sherwood@rosamond.me",
  "address": {
  "street": "Ellsworth Summit",
  "suite": "Suite 729",
  "city": "Aliyaview",
  "zipcode": "45169",
  "geo": {
  "lat": "-14.3990",
  "lng": "-120.7677"
  }
  },
  "phone": "586.493.6943 x140",
  "website": "jacynthe.com",
  "company": {
  "name": "Abernathy Group",
  "catchPhrase": "Implemented secondary concept",
  "bs": "e-enable extensible e-tailers"
  }
  },
  {
  "id": 9,
  "name": "Glenna Reichert",
  "username": "Delphine",
  "email": "Chaim_McDermott@dana.io",
  "address": {
  "street": "Dayna Park",
  "suite": "Suite 449",
  "city": "Bartholomebury",
  "zipcode": "76495-3109",
  "geo": {
  "lat": "24.6463",
  "lng": "-168.8889"
  }
  },
  "phone": "(775)976-6794 x41206",
  "website": "conrad.com",
  "company": {
  "name": "Yost and Sons",
  "catchPhrase": "Switchable contextually-based project",
  "bs": "aggregate real-time technologies"
  }
  },
  {
  "id": 10,
  "name": "Clementina DuBuque",
  "username": "Moriah.Stanton",
  "email": "Rey.Padberg@karina.biz",
  "address": {
  "street": "Kattie Turnpike",
  "suite": "Suite 198",
  "city": "Lebsackbury",
  "zipcode": "31428-2261",
  "geo": {
  "lat": "-38.2386",
  "lng": "57.2232"
  }
  },
  "phone": "024-648-3804",
  "website": "ambrose.net",
  "company": {
  "name": "Hoeger LLC",
  "catchPhrase": "Centralized empowering task-force",
  "bs": "target end-to-end models"
  }
  }
  ]
  