/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from "./Constants";
import "../App.css";
import CardInfo from "./CardInfo"
import CardImg from "./CardImg"
import styled from "styled-components";


const StyledCard = styled.div`
    width: 40%;
    border: 2px solid black;
    padding: 2%;
    margin-bottom: 1%;
    border-radius: 15%;
    background-color: #fffaf0;

    &:hover {
        transform: scale(1.3);
        transition: .5s;
        box-shadow: 10px 5px 5px grey;
    }
`
const OuterDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;

    h1{
        font-size: 4rem;
        color: #fffaf0;
    }
`



export default function Card(props){

const [ podArray, setPodArray] = useState([]);
useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}&start_date=2021-10-01&end_date=2021-10-07`)
    .then(res => {
        setPodArray(res.data);
    }).catch(err => {
        console.error(err);
    })
}, [])

    console.log(podArray)

return ( 
    <>
    
    <OuterDiv>
        <h1>NASA - October 2021 <br/> Photo of the Day</h1>
        {podArray.map(elem => 
            <StyledCard>
            <CardImg copyright={elem.copyright} cardImg={elem.url} />
            <div>
                <CardInfo cardDate={elem.date} cardInfo={elem.title} />
            </div>    
        </StyledCard>)}
    </OuterDiv>
    
    </>
)
}

// { cardData && ( <><CardImg copyright={cardData.copyright} cardImg={cardData.url} />
//         <div className='cardInfo'>
//         <CardInfo cardDate={cardData.date} cardInfo={cardData.explanation}cardTitle={cardData.title}/>
                  
            

//         </div></>)}