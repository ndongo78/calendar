import { useState } from 'react';
import { 
    Scheduler,
     WeekView, 
     Appointments,
      AppointmentTooltip,
      MonthView, 
    DayView, 
    Toolbar ,
    ViewSwitcher,
} from '@devexpress/dx-react-scheduler-material-ui';
import { AllDayPanel, ViewState,  } from '@devexpress/dx-react-scheduler';
import { Paper, makeStyles } from '@material-ui/core';
import { LocalizationProvider, locale } from '@devexpress/dx-react-core';
import { fr } from '@devexpress/dx-core';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';


const useStyles = makeStyles(theme => ({
  column: {
    display: 'flex',
    flexDirection: 'column',
    borderRight: `1px solid ${theme.palette.divider}`,
    height: '100%',
    width:"45%",
    margin:20
  },
  paper: {
    height: '100%',
  },
}));

const users = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
  { id: 3, name: 'User 3' },
];

const SheduleComponent = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [locale,setLocale] = useState("fr-FR") 
  const [currentViewName,setcurrentViewName] = useState("work-week") 
  
  const currentViewNameChange = (currentViewName) => {
    setcurrentViewName( currentViewName );
  };

 const changeLocale = event => setLocale( event.target.value );
  

  const handleAppointmentAdd = (appointment) => {
    setData([...data, appointment]);
  };

  const handleAppointmentDelete = (appointment) => {
    setData(data.filter(item => item !== appointment));
  };

  const handleAppointmentChange = (appointment, changes) => {
    setData(data.map(item => item === appointment ? { ...item, ...changes } : item));
  };
  



  return (
    <>
    <div style={{ display: 'flex', width: '100%', height: '100%',flexWrap:"wrap" }}>
      {users.map(({ id, name }) => (
        <div key={id} className={classes.column}>
          <h2 style={{ textAlign: 'center' }}>{name}</h2>
          <Paper className={classes.paper}>
            <Scheduler
              data={data}
              height={600}
              locale={locale}
            >
              <ViewState
            defaultCurrentDate={new Date().getDate()}
            currentViewName={currentViewName}
            onCurrentViewNameChange={currentViewNameChange}
          />
              <WeekView
            startDayHour={10}
            endDayHour={19}
          />
          <WeekView
            name="work-week"
            displayName="Work Week"
            excludedDays={[0, 6]}
            startDayHour={9}
            endDayHour={19}
          />
          <MonthView />
          <DayView />

          <Toolbar />
          <ViewSwitcher />

              <Appointments />
              <AppointmentTooltip
                showOpenButton
                showDeleteButton
              />
            </Scheduler>
          </Paper>
        </div>
      ))}
    </div>
    </>
  );
};

export default SheduleComponent;
