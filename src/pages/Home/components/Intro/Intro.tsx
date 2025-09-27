import * as Styled from "./styles";
import Button from "core/components/Button";
import { HashLink } from "react-router-hash-link";

const Intro = () => {
  return (
    <Styled.IntroContainer>
     
      
      <Styled.Title>
        Hello!
        <div /> I’m Nasrin Soufi,
        <div /> a Full-Stack Developer.
      </Styled.Title>
      <Styled.Description>
      I’m a Full Stack Developer with over three years of experience building responsive web applications.
      Skilled in React, Next.js, TypeScript, ASP.NET Core, and SQL Server,
      I create end-to-end solutions that combine clean front-end design with robust back-end functionality.
      My focus is on writing scalable, efficient code and leveraging modern technologies to deliver high-quality applications.
      </Styled.Description>

      <HashLink to="/#skill" smooth style={{ textDecoration: "none" }}>
        <Button title="Get Started" style={{ marginTop: 55 }} />
      </HashLink>
    </Styled.IntroContainer>
  );
};

export default Intro;
