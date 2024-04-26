import React from 'react'
import { persons } from './file2';



function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  function WelcomePerson({ person }) {
    return (
        <div key={person.firstName}>
            <div>First Name: {person.firstName}</div>
            <div>Last Name: {person.lastName}</div>
            <div>Email: {person.email}</div>
        </div>
    );
}

function WelcomePersons() {
    return (
        <div>
            {persons.map((person, index) => (
                <WelcomePerson key={index} person={person} />
            ))}
        </div>
    );
}


  function MultiWelcome() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
        <WelcomePerson person={persons[0]} />
        <WelcomePerson person={persons[1]} />
        <WelcomePerson person={persons[2]} />
        <WelcomePersons/>
      </div>
    );
  }



export default MultiWelcome;
export { Welcome, WelcomePerson };
  