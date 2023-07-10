import { Routes, Route } from "react-router-dom";
import { styled } from "styled-components";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FactPage from "./pages/FactPage";
import Navbar from "./components/Navbar";
import { GlobalStyles } from "./themes";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/fact/:factId" element={<FactPage />} />
          <Route path="/fact" element={<FactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  width: clamp(400px, 700px, 80%);
  margin: 100px auto 0 auto;
`
