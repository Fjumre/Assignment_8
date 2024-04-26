import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import upper, {text1,text2, text3} from "./file1";
import obj, { females, males } from './file2';
import React, { Fragment, useEffect  } from 'react'
import MultiWelcome, {Welcome, WelcomePerson} from './file3';
import {JokeComponent, JokeComponentTwo} from './joke';



function App() {
  
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(obj);
    }, []);

    useEffect(() => {
        console.log([...males, ...females]); 
      }, []); 

    return (
      <>
<h2>Ex 1</h2>

<p>{upper("please uppercase me")}</p>
<p>{upper(text1)}</p>
<p>{upper(text2)}</p>
<p>{upper(text3)}</p>


            <h2>Ex 2</h2>
            <p>First Name: {obj.firstName}, Email: {obj.email}</p>

            <h2>Ex 3</h2>
            <MultiWelcome/>


            <h2>Joke</h2>
            <JokeComponent/>

            <h2>Another joke</h2>
            <JokeComponentTwo/>

      </>

    )
}

export default App
