import { FC } from "react";
import * as Styled from "./styles";
import { ProjectsItemType } from "pages/Projects/data/ProjectsData";
import restaurant1 from "assets/images/projects/restaurant1.png";
import restaurant2 from "assets/images/projects/restaurant2.png";
import restaurant3 from "assets/images/projects/restaurant3.png";
import survey1 from "assets/images/projects/survey1.jpg";
import survey2 from "assets/images/projects/survey2.jpg";
import survey3 from "assets/images/projects/survey3.png";
import food1 from "assets/images/projects/food1.png";
import food2 from "assets/images/projects/food2.png";

const ProjectCard: FC<ProjectsItemType> = (props) => {
  const { id, title, description, isApp } = props;

  //same order as the data in ProjectsData.ts
  const images = [
    restaurant1,
    restaurant2,
    restaurant3,
    survey1,
    survey2,
    survey3,
    food1,
    food2,
  ];
  return (
    <Styled.Card>
      <Styled.ImageFrame>
        <Styled.Image src={images[id]} alt="images" isApp={isApp} />
      </Styled.ImageFrame>

      <Styled.InfoContainer>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>

        {/* Add a details page and link it to this button--> arrow-up.svg icon */}
      </Styled.InfoContainer>
    </Styled.Card>
  );
};

export default ProjectCard;
