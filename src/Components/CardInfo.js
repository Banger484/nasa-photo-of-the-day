/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const CardInfo = props =>{

const { cardTitle, cardDate, cardInfo } = props

return (
<>
<h2>{cardTitle}</h2>
<h3>{cardDate}</h3>
<p>{cardInfo}</p>
</>
)}
export default CardInfo