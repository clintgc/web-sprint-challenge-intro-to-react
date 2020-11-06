import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { BASE_URL } from './components/constants';
import ProfileMaker from './components/Character';
import './App.css';
import styled from "styled-components";


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

    const Wrapper = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      `;

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      <Wrapper>
        {
          starWarsChar && starWarsChar.results.map( chars => 
          <ProfileMaker key={chars.id} chars={chars} />)
        }
      </Wrapper>
    </div>
  );
}
export default App;