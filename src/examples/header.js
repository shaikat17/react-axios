import React, { useState } from 'react'
import axios from 'axios'


// url
const url = 'https://icanhazdadjoke.com/'
// Accept: 'application/json'


const Header = () => {
    const [joke, setJoke] = useState('random dad joke')
 
    const fetchDadJoke = async () => {
        try {
            const response = await axios(url, {
                headers: {
                    Accept: 'application/json'
                }
            })
            const data = response.data
            // console.log(data.joke);
            setJoke(data.joke)
        } catch (error) {
            console.log(error.response);
        }
        // console.log('fetch dad joke');
    }

    return (
    <section className="section text-center">
        <button className="btn" onClick={fetchDadJoke}>Random Joke</button>
        <p className="dad-joke">{joke}</p>
    </section>
  )
}

export default Header