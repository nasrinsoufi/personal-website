import { FC } from "react";
import * as Styled from "./styles";


type Props = {
  title: string;
  subTitle?: string;
  titleStyle?: object;
  subTitleStyle?: object;
};
const HeaderWithIcon: FC<Props> = (props) => {
  const { title, subTitle, titleStyle, subTitleStyle } = props;

  return (
    <Styled.HeaderContainer>
      <Styled.TitleContainer>
        <Styled.Title style={titleStyle}>
          {title}
          
        </Styled.Title>
      </Styled.TitleContainer>
      {subTitle && (
        <Styled.SubTitle style={subTitleStyle}>{subTitle}</Styled.SubTitle>
      )}
    </Styled.HeaderContainer>
  );
};

export default HeaderWithIcon;
