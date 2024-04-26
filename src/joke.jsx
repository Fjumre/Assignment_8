import React, { useState, useEffect } from 'react';

function JokeComponent() {
    // State to store the joke
    const [joke, setJoke] = useState('');

    // useEffect to fetch the joke
    const fetchJoke = () => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => setJoke(data.value))
            .catch(error => console.error('Error fetching joke:', error));
    };

   
    
    // useEffect to fetch the joke initially
    useEffect(() => {
        fetchJoke();
    }, []);

   
    // Render the joke
    return (
        
        <div>
            <p>{joke}</p>
            <button onClick={fetchJoke}>Get New Joke</button>
            
        </div>
    );
    
}




function JokeComponentTwo() {
    // State to store the joke
    const [joke, setJoke] = useState('');


    const fetchJoke = () => {
        fetch('https://icanhazdadjoke.com/', {
            headers: {
                Accept: 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setJoke(data.joke))
            .catch(error => console.error('Error fetching joke:', error));
    };
    useEffect(() => {
        fetchJoke();
        const timerId = setInterval(fetchJoke, 10000);
        return () => clearInterval(timerId);
    }, []);

    return (
        
        <div>
            <p>{joke}</p>
            
        </div>
    );
    
}

export { JokeComponent, JokeComponentTwo }; 
