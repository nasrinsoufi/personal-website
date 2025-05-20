import * as Styled from "./styles";
import profile from "assets/images/programmer-girl.svg";


const AboutPhoto = () => {
  return (
    <Styled.AboutPhotoContainer>
      <Styled.Frame>
        
        
        <Styled.Profile src={profile} />
      </Styled.Frame>
    </Styled.AboutPhotoContainer>
  );
};

export default AboutPhoto;
