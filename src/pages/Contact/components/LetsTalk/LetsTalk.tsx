import * as Styled from "./styles";
import Button from "core/components/Button";
import CustomHref from "core/components/CustomHref";

const LetsTalk = () => {
  return (
    <Styled.Container>
      <Styled.TextContainer>
        <Styled.Title>
          let's work together
          
        </Styled.Title>
        <Styled.Description>
          Ready to elevate your web presence?
          <div />
          As a full-stack developer, I turn ideas into seamless, user-friendly designs.
          <div /> Let’s create something amazing together!
        </Styled.Description>
      </Styled.TextContainer>

      <Styled.ButtonContainer>
        <CustomHref to="mailto:malih.ghasemian@gmail.com">
          <Button title="Let's Talk" color="secondary" />
        </CustomHref>
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};

export default LetsTalk;
