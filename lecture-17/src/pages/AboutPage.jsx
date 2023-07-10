import React from 'react'
import { styled } from 'styled-components'

const AboutPage = () => {
    return (
        <Container>
            <H1>Short biography</H1>
            <P>
                Nikola Tesla, (born July 9/10, 1856, Smiljan, Austrian Empire [now in Croatia]—died January 7, 1943, New York, New York, U.S.),
                Serbian American inventor and engineer who discovered and patented the rotating magnetic field,
                the basis of most alternating-current machinery.
                He also developed the three-phase system of electric power transmission. He immigrated to the United States in 1884 and sold the patent rights to his system of alternating-current dynamos, transformers, and motors to George Westinghouse. In 1891 he invented the Tesla coil,
                an induction coil widely used in radio technology.
                Tesla was from a family of Serbian origin. His father was an Orthodox priest; his mother was unschooled but highly intelligent. As he matured, he displayed remarkable imagination and creativity as well as a poetic touch.
            </P>
        </Container>
    )
}

export default AboutPage

const Container = styled.div`
    width: 100%;
    max-width: 800px;

`
const H1 = styled.h1`
    font-size: 40px;
`

const P = styled.p`
    margin-top: 20px;
    font-size: 22px;
`