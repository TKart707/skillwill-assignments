import { styled } from 'styled-components'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <Container>
        <Nav>
            <Ul>
                <Li>
                    <StyledLink to="/">
                        Home
                    </StyledLink>
                </Li>
                
                <Li>
                    <StyledLink to="/about" >
                        About
                    </StyledLink>
                </Li>
                
                <Li>
                    <StyledLink to="/fact" >
                        Facts
                    </StyledLink>
                </Li>
                
            </Ul>
        </Nav>
    </Container>
  )
}

export default Navbar

const Container = styled.header`
    background-color: rgba(0, 0, 0, 0.2);
    padding: 20px;
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
`

const Ul = styled.ul`
    display: flex;
    align-items: center;
    gap: 30px;
    margin: 0 auto;
`

const Li = styled.li`
    list-style-type: none;
    font-size: 32px;
    text-transform: uppercase;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000000;
`
