import * as React from 'react';
import Paper from '@mui/material/Paper';
import { AppointmentTooltip, ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';
import { users } from '../App';



export default class Demo2 extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      currentDate: '2018-06-27',
    };
    this.currentDateChange = (currentDate) => { this.setState({ currentDate }); };
  }

  render() {
    const { data, currentDate } = this.state;

    return (
      <Paper>
        <Scheduler
          data={[]}
          height={660}
        >
          {
            users.map((user) =>(
              <div> {user.name} </div>
            ))
          }
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={this.currentDateChange}
          />
          <WeekView
            startDayHour={8}
            endDayHour={20}
          />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments />
        </Scheduler>
      </Paper>
    );
  }
}

// import React from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';

// const users = [
//   {
//     id: 1,
//     name: 'User 1',
//     events: [
//       {
//         title: 'Event 1',
//         start: '2023-02-14T10:30:00',
//         end: '2023-02-14T12:30:00',
//       },
//       {
//         title: 'Event 2',
//         start: '2023-02-15T13:00:00',
//         end: '2023-02-15T15:00:00',
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: 'User 2',
//     events: [
//       {
//         title: 'Event 3',
//         start: '2023-02-14T14:00:00',
//         end: '2023-02-14T16:00:00',
//       },
//       {
//         title: 'Event 4',
//         start: '2023-02-16T10:00:00',
//         end: '2023-02-16T12:00:00',
//       },
//     ],
//   },
// ];