import * as Styled from "./styles";
import HeaderWithIcon from "core/components/HeaderWithIcon";
import ProjectList from "./components/ProjectList";

const Projects = () => {
  return (
    <Styled.ProjectsContainer parentStyle={{ height: "auto" }}>
      <Styled.TitleContainer>
        <HeaderWithIcon
          title="Projects"
          
          titleStyle={{
            margin: "auto",
          }}
          subTitleStyle={{
            width: "80%",
          }}
        />
       
      </Styled.TitleContainer>

      <ProjectList />
    </Styled.ProjectsContainer>
  );
};

export default Projects;
