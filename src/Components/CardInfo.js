/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const CardInfo = props =>{

const { cardTitle, cardDate, cardInfo } = props

console.log(cardTitle)

return (
<>
<h3>{cardTitle}</h3>
<p>{cardDate}</p>
<p>{cardInfo}</p>
</>
)


}
export default CardInfo