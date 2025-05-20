import * as Styled from "./styles";
import Button from "core/components/Button";
import { HashLink } from "react-router-hash-link";

const Intro = () => {
  return (
    <Styled.IntroContainer>
     
      
      <Styled.Title>
        Hello!
        <div /> I’m Nasrin Soufi,
        <div /> a Front End Developer.
      </Styled.Title>
      <Styled.Description>
      I am a passionate Front-End Developer specializing in building user-friendly, responsive,
      and modern web applications. Proficient in React and Next.js,
      I enjoy transforming complex ideas into seamless digital experiences. 
      I am dedicated to continuous learning and staying updated with the latest technologies to deliver high-quality solutions.
      </Styled.Description>

      <HashLink to="/#skill" smooth style={{ textDecoration: "none" }}>
        <Button title="Get Started" style={{ marginTop: 55 }} />
      </HashLink>
    </Styled.IntroContainer>
  );
};

export default Intro;
