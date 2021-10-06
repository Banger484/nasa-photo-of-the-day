/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from "./Constants";
import "../App.css";
import CardInfo from "./CardInfo"
import CardImg from "./CardImg"

export default function Card(props){

const [ cardData, setCardData] = useState(null);

useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
        setCardData(res.data);
    }).catch(err => {
        console.error(err);
    })
}, [])

    console.log(cardData)

return ( 
    <><h1>NASA Photo of the Day!</h1>
    <div className='card'>
        
        { cardData && ( <><CardImg copyright={cardData.copyright} cardImg={cardData.url} />
            <div className='cardInfo'>
            <CardInfo cardDate={cardData.date} cardInfo={cardData.explanation}cardTitle={cardData.title}/>
            <p>{cardData.date}</p>
            

        </div></>)}
    </div></>
)

}