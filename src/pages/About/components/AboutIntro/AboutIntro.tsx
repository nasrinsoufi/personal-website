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
      I’m a Full Stack Developer with over three years of experience delivering both front-end and back-end solutions.
      My journey began with freelance projects where I built responsive, user-focused websites and web applications.
      On the front-end, I’ve worked extensively with HTML, CSS, JavaScript, TypeScript, React, and Next.js. On the back-end,
      I have experience with ASP.NET Core and SQL Server, developing APIs and integrating databases to create complete, scalable applications.

        <div style={{ marginTop: 15 }} />
        Freelancing has strengthened my ability to work independently,
        communicate effectively with clients, and deliver high-quality results on time.
        I’m passionate about combining modern technologies across the stack to build efficient, reliable, and custom solutions that meet each client’s unique needs.
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
