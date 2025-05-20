import { pagesListData } from "pages/Home/data/PageListData";
import * as Styled from "./styles";
import { HashLink } from "react-router-hash-link";


const Footer = () => {
  return (
    <>

     <Styled.Line />
      <Styled.Container>
        <Styled.PageContainer>
          {pagesListData.map((page) => (
            <HashLink
              key={page.id}
              smooth
              to={page.path}
              style={{ textDecoration: "none" }}
            >
              <Styled.Text>{page.name}</Styled.Text>
            </HashLink>
          ))}
        </Styled.PageContainer>

        <Styled.InfoContainer>
          <Styled.Text>Mail: nasrin.soufi95@gmail.com</Styled.Text>
        </Styled.InfoContainer>
      </Styled.Container>

      

      
    </>
  );
};

export default Footer;
