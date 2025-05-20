import * as Styled from "./styles";
import Linkedin from "assets/images/in.svg";
import github from "assets/images/github.svg";
import CustomHref from "core/components/CustomHref";

const buttons = [
  {
    id: 0,
    icon: Linkedin,
    link: "https://linkedin.com/in/nasrin-si",
  },
  {
    id: 1,
    icon: github,
    link: "https://github.com/nasrinsoufi",
  },
  
];
const SocialLinks = () => {
  return (
    <div>
      {buttons.map((button) => (
        <CustomHref
          key={button.id}
          to={button.link}
          style={{ marginRight: 10 }}
        >
          <Styled.Icon src={button.icon} />
        </CustomHref>
      ))}
    </div>
  );
};

export default SocialLinks;
