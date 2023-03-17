import { Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { appointments, users } from '../App'

import { 
  Scheduler,
   WeekView, 
   Appointments,
    AppointmentTooltip,
    MonthView, 
  DayView, 
  Toolbar ,
  ViewSwitcher,DateNavigator, EditRecurrenceMenu, ConfirmationDialog, AppointmentForm, 
} from '@devexpress/dx-react-scheduler-material-ui';
import {  makeStyles } from '@material-ui/core';
import { AllDayPanel, EditingState, ViewState,  } from '@devexpress/dx-react-scheduler';
import { appointmentsR } from './Appoints';
import { SelectionState } from '@devexpress/dx-react-core';
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

export const ListUsers = () => {
  const classes = useStyles();
  const [locale,setLocale] = useState("fr-FR") 
  const [addedAppointment,setaddedAppointment] = useState({}) 
  const [appointmentChanges,setappointmentChanges] = useState({}) 
  const [editingAppointment,seteditingAppointment] = useState() 
  
  
  const [currentViewName,setcurrentViewName] = useState("work-week") 


  const currentViewNameChange = (currentViewName) => {
    setcurrentViewName( currentViewName );
  };

  const  changeAddedAppointment=(addedAppointment) =>{
    console.log("addedAppointment",addedAppointment)
  }

  const changeAppointmentChanges=(appointmentChanges)=> {
     console.log("appointmentChanges",appointmentChanges)
  }

  const changeEditingAppointment=(editingAppointment)=> {
     console.log("editingAppointment",editingAppointment)
  }

 const commitChanges=({ added, changed, deleted }) =>{
    
  }

  const [selection, setSelection] = useState({});

  const handleSelectionChange = ({ startDate, endDate }) => {
    setSelection({ startDate, endDate });
  };


  return (
    <Grid style={{margin:0,padding:0}}>
         <Paper className={classes.paper}>
            <Scheduler
              data={appointmentsR}
              height={600}
              locale={locale}
            >
              <ViewState
            defaultCurrentDate={new Date()}
            currentViewName={currentViewName}
            onCurrentViewNameChange={currentViewNameChange}
          />
           <EditingState
            onCommitChanges={commitChanges}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={changeAddedAppointment}
            appointmentChanges={appointmentChanges}
            onAppointmentChangesChange={changeAppointmentChanges}
            editingAppointment={editingAppointment}
            onEditingAppointmentChange={changeEditingAppointment}
          />
              <WeekView
            startDayHour={10}
            endDayHour={19}
          />
          <WeekView
            name="work-week"
            displayName="Work Week"
            excludedDays={[0, 6]}
            startDayHour={7}
            endDayHour={20}
          />
          <MonthView />
          <DayView />
          <Toolbar />
          <DateNavigator />
          <ViewSwitcher />
          <EditRecurrenceMenu />
          <ConfirmationDialog />
          <Appointments />
          <AppointmentTooltip
            showOpenButton
            showDeleteButton
          />
          <AppointmentForm />
            </Scheduler>
          </Paper>
    </Grid>
  )
}
