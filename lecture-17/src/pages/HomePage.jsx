import React from 'react'
import { styled } from 'styled-components'
import ProfileImg from "../assets/nikola-tesla.jpg"

const HomePage = () => {
    return (
        <Container>
            <h1>This website is about <Span>Nikola Tesla</Span></h1>
            <Img src={ProfileImg} alt="Nikola Tesla" />
        </Container>
    )
}

export default HomePage

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`

const Img = styled.img`
    width: 600px;
`

const Span = styled.span`
    color: #FF5733;
`
