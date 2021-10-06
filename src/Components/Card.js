/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from "./Constants";
import "../App.css";


export default function Card(props){

const [ cardData, setCardData] = useState([]);

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
    <div className='card'>
        <img className='cardImg' src={cardData.url} alt=''></img>
        <div className='cardInfo'>
            <p className='copyright'>{cardData.copyright}</p>
            <p>{cardData.date}</p>
            <p>{cardData.explanation}</p>

        </div>
    </div>
)

}