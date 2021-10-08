/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
h2{
    font-size: 3rem;
    text-shadow: 2px 2px grey;
}

p{
    font-size: 1.5rem;
    font-weight: bolder;
}
`

const CardInfo = props =>{

const { cardTitle, cardDate, cardInfo } = props

return (
<>
<StyledDiv>
<h2>{cardTitle}</h2>
<h3>{cardDate}</h3>
<p>{cardInfo}</p>
</StyledDiv>

</>
)}
export default CardInfo