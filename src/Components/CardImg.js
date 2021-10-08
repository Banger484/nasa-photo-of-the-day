/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";

const StyledImg = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 2px solid black;
    

    &:hover {
        transform: scale(1.2);
        transition: .5s;
        border-radius: 15%;
        box-shadow: 10px 5px 5px grey;
    }
`
const StyledDiv = styled.div`
p{
    font-size: 2rem;
}
`

const CardImg = props => {

    const { cardImg, copyright } = props

return (
<>
    <StyledDiv>
        <StyledImg className='cardImg' src={cardImg} alt=''></StyledImg>
        <p className='copyright'>{copyright}</p>
    </StyledDiv>
    
</>   
    )
}

export default CardImg