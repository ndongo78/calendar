import { useState } from 'react';
import {
  Scheduler,
  MonthView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
} from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler';

const userAppointments = {
  user1: [
    {
      title: 'Meeting with John',
      startDate: new Date(2022, 1, 14, 10, 0),
      endDate: new Date(2022, 1, 14, 11, 0),
    },
    {
      title: 'Lunch with Mark',
      startDate: new Date(2022, 1, 18, 12, 0),
      endDate: new Date(2022, 1, 18, 13, 0),
    },
  ],
  user2: [
    {
      title: 'Phone call with Sarah',
      startDate: new Date(2022, 1, 10, 14, 0),
      endDate: new Date(2022, 1, 10, 15, 0),
    },
    {
      title: 'Meeting with Alex',
      startDate: new Date(2022, 1, 21, 9, 0),
      endDate: new Date(2022, 1, 21, 10, 0),
    },
  ],
};

const users = [
  { id: 'user1', name: 'John' },
  { id: 'user2', name: 'Sarah' },
];

const UserScheduler = ({ userId, userAppointments }) => (
  <Scheduler data={userAppointments}>
    <ViewState currentDate={new Date()} />
    <MonthView />
    <Appointments />
    <AppointmentTooltip showOpenButton showDeleteButton />
    <AppointmentForm />
  </Scheduler>
);

const UserListScheduler = () => {
  const [currentUserId, setCurrentUserId] = useState(users[0].id);

  const handleUserChange = (userId) => {
    setCurrentUserId(userId);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h3>Users</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <button onClick={() => handleUserChange(user.id)}>
                {user.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 4 }}>
        <h3>Schedule for {users.find((u) => u.id === currentUserId).name}</h3>
        <UserScheduler
          userId={currentUserId}
          userAppointments={userAppointments[currentUserId]}
        />
      </div>
    </div>
  );
};

export default UserListScheduler