import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";

const profileWidth = 300;
const profileHeight = 400;

export const ProfileContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 740px) {
    display: none; //fix it later
  }
`;

export const Frame = styled.div<MuiEmotion>`
  width: ${profileWidth + 20 + "px"};
  height: ${profileHeight + 20 + "px"};
  flex-shrink: 0;
  border-radius: ${profileWidth + "px"};
  margin: 30px 0 0 30px;
  ${({ theme }) => `
    border: 2px solid ${theme.palette.text.secondary};
  `}
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Profile = styled.img`
  width: ${profileWidth + "px"};
  height: ${profileHeight + "px"};
  flex-shrink: 0;
  border-radius: ${profileWidth + "px"};
`;



