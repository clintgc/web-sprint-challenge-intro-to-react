import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { BASE_URL, ALT_URL } from './constants';

const ProfileMaker = (props) => {
    const { chars } = props

    return (
        <Container>
            <div className = 'container'>
                <h2>Name: {chars.name}</h2>
                <h3>Height: {chars.height}</h3>
                <h3>Mass: {chars.mass}</h3>
            </div>
        </Container>
    )


}
export default ProfileMaker