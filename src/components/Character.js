import React, {useState, useEffect} from 'react';
import styled from "styled-components";

const Container = styled.div`
    width: 70%;
    padding: 2.5%;
    border: .5px;
    border-radius: 15px;
    margin: 5px;
    `;

const ProfileMaker = (props) => {
    const { chars } = props

    return (
        <Container>
            <div className = 'container'>
                <h2>Name: {chars.name}</h2>
                <ul>Height: {chars.height}</ul>
                <ul>Mass: {chars.mass}</ul>
                <ul>Birth Year: {chars.birth_year}</ul>
                <ul>Gender: {chars.gender}</ul>
            </div>
        </Container>
    )


}
export default ProfileMaker