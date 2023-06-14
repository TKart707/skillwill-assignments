import './App.css';
import styled from "styled-components";
import ProfileImg from "./assets/profile.jpg";

function App() {
  return (
    <Container>
      <Img src={ProfileImg} />
      <NameContainer>
        <Name>Tornike Kartvelishvili</Name>
        <Title>Front-End Developer</Title>
      </NameContainer>
      <Bio>
        After trying many things in life, I think have found my calling. My goal is to become a professional full-stack developer in 3-4 years, I know the road will be quite difficult, but I am ready for challenges and have a strong weapon in my hand in the form of "I never give up".
        The thirsty person need water, the hungry person need food, and I need the first job to keep moving and developing.
      </Bio>
    </Container>
  );
}

export default App;

const Container = styled.div`
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 150px;
  border-radius: 50%;
`;

const NameContainer = styled.div`
`
const Name = styled.h2`
  font-size: 20px;
  margin-bottom: 6px;
`
const Title = styled.h4`
  font-size: 16px;
  color: grey;
`

const Bio = styled.p`
  font-size: 16px;
  line-height: 22px;
  margin-top: 20px;
`