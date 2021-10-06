/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const CardImg = props => {

    const { cardImg, copyright } = props

return (
<>
    <img className='cardImg' src={cardImg} alt=''></img>
    <p className='copyright'>{copyright}</p>
</>   
    )
}

export default CardImg