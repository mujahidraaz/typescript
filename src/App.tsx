import React from 'react';
import './App.css';
import { PersonList } from './components/PersonList';
import { Welcome } from './components/Welcome';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscer } from './components/Oscer';
import { Buttons } from './components/Buttons';
import { Input } from './components/Input';
import { Style } from './components/Style';
import { LoggedIn } from './components/state/LoggedIn';
import { Counter } from './components/state/Counter';
import { CustomButton } from './components/html/CustomButton';

function App() {

  const PersonData = [
    {
      fname: 'mujahid',
      lname: 'hussain'
    },
    {
      fname: 'shahid',
      lname: 'hussain'
    },
    {
      fname: 'zahid',
      lname: 'hussain'
    },
  ]
  return (
    <div className="App">
      <Welcome name="typescirpt" student={10} isLoggedin={true} />
      <PersonList names={PersonData} isLoggedin={false} />
      <Status status="success"/>
      <Oscer><Heading>Oscer</Heading></Oscer>
      <Buttons handleClick={(event, id) => {console.log(event, id)}} />
      <Input value="" InputHandle={(event) => {console.log(event)}}/>
      <Style styles={{ border: '1px solid red', padding:'1rem', width:'200px', margin:'20px auto'}} />
      <LoggedIn />
      < Counter />
      <CustomButton variant='primary' onClick={() => {console.log('clicked')}}>
        Primary Button
      </CustomButton>
      {/* <CustomComponents /> */}
      
    </div>
  );
}

export default App;
