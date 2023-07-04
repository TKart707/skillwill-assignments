import styled, { ThemeProvider } from "styled-components";
import useLocalStorage from "./hooks/useLocalStorage";
import useWindowSize from "./hooks/useWindowSize";
import { lightTheme, darkTheme } from "./themes";

function App() {
  const [theme, toggle] = useLocalStorage('theme', 'light');
  const { device } = useWindowSize();

  let themeValue = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={device === 'mobile' ? lightTheme : themeValue}>
      <Container>
        <ButtonWrapper>
          <Button onClick={() => toggle('dark')}>Dark</Button>
          <Button onClick={() => toggle('light')}>Light</Button>
        </ButtonWrapper>
        <Section>
          <H2>Lorem ipsum dolor sit amet.</H2>
          <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque a consequatur commodi saepe, laudantium blanditiis.</P>
        </Section>
        <Section>
          <H2>Lorem, ipsum dolor.</H2>
          <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptates dicta tenetur molestiae ab ratione, soluta suscipit distinctio debitis eligendi?</P>
        </Section>
      </Container>
    </ThemeProvider>
  )
}

export default App;

const Container = styled.div`
  height: 100vh;
  padding: 20px;
  background-color: ${({ theme }) => theme.appBG};
`

const Section = styled.section`
  padding: 10px;
  margin-bottom: 10px;
  max-width: 600px;
  background-color: ${({ theme }) => theme.sectionBG};
  color: ${({ theme }) => theme.sectionColor};
  border-radius: 20px;
`

const H2 = styled.h1`
`
const P = styled.p`
`
const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`

const Button = styled.button`
  padding: 5px 10px;
  margin-bottom: 20px;
  border-radius: 20px;
  border: none;
  background-color: ${({ theme }) => theme.btnBG};
  color: ${({ theme }) => theme.btnColor};
`