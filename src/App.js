import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { BASE_URL } from './components/constants';
import PorfileMaker from './components/Character';
import './App.css';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

    const [starWarsChar, setStarWarsChar] = useState('')
    console.log(starWarsChar);

    useEffect(() => {
        axios
        .get(`${BASE_URL}`)
        .then( res => {
            console.log(res.data)
            setStarWarsChar(res.data)
        })
        .catch( err => {

        })
    }, [])


  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      {starWarsChar && starWarsChar.results.map( chars => 
        <ProfileMaker key={chars.id} chars={chars} />
      )}
    </div>
  );
}
export default App;