import * as Styled from "./styles";
import profile from "assets/images/profile.png";

const Profile = () => {
  return (
    <Styled.ProfileContainer>
      <Styled.Frame>
        <Styled.Profile src={profile} />
      </Styled.Frame>
    </Styled.ProfileContainer>
  );
};

export default Profile;
