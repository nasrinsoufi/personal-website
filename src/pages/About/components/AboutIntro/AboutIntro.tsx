import HeaderWithIcon from "core/components/HeaderWithIcon/HeaderWithIcon";
import * as Styled from "./styles";
import Button from "core/components/Button";
import SocialLinks from "../SocialLinks";

const AboutIntro = () => {
  return (
    <Styled.AboutIntroContainer>

      <HeaderWithIcon
        title="About Me"
        titleStyle={{ textAlign: "left", paddingLeft: 0, paddingBottom: 30 }}
      />

      <Styled.Description>
      I’m a Front-End Developer with over two years of experience specializing 
      in freelance projects, where I’ve built a variety of responsive websites and web applications.
      I’ve honed my skills in technologies like HTML, CSS, JavaScript, TypeScript, React, and Next.js,
      constantly learning and adapting to new challenges.

        <div style={{ marginTop: 15 }} />
        Many of the projects I’ve worked on involved creating custom solutions for clients, 
        which you can explore on this portfolio site. Freelancing has taught me to work independently,
       communicate effectively, and deliver high-quality results within deadlines, 
       all while embracing the latest tools and technologies to meet clients' unique needs.
      </Styled.Description>

      <Styled.Row>
        <Button title="Hire Me" href="mailto:nasrin.soufi95@gmail.com" />

        <Styled.IconRow>
          <Styled.Text>Follow Me</Styled.Text>
          <Styled.Line>_________</Styled.Line>

          <SocialLinks />
        </Styled.IconRow>
      </Styled.Row>
    </Styled.AboutIntroContainer>
  );
};

export default AboutIntro;
