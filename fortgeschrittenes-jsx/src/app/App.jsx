import React from 'react';
import { RegisterForm } from './RegisterForm';
import {AttendeeList} from './AttendeeList';
import {Tab} from './Tab';
import {TabController} from './TabController';

const mockAttendees = [
  {
    name: 'Selina Kyle',
    tShirtSize: 'W-M',
    lunch: true
  },
  {
    name: 'BruceWayne',
    tShirtSize: 'M-L',
    lunch: true
  },
  {
    name: 'Diana Price',
    tShirtSize: 'M-L',
    lunch: false
  }
]

export class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      attendeeList: mockAttendees
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(newAttendee){
    this.setState(prevState => {
      return {
        ...prevState, //überschreibt die Liste mit der bisherigen Liste
        attendeeList: [
          ...prevState.attendeeList, //überschreibt den Listeninhalt mit dem bisherigen Inhalt
          newAttendee //Fügt den den neuen Inhalt der Registerform hinzu
        ]
      }
    });
  }
  render () {
    return (
      <TabController>
        <Tab headline="Registrietung">
          <RegisterForm onSubmit={this.handleSubmit}/> 
        </Tab>
        <Tab headline="Teilnehmendenliste">
          <AttendeeList attendees={this.state.attendeeList} />
        </Tab>
      </TabController>
    );
  }
}
