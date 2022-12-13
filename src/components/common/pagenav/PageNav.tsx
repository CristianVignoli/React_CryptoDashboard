import styled from "styled-components";
import RecordNumberSelector from "./RecordNumberSelector";
import PageSelector from "./PageSelector";

const Container = styled.div`
  display: flex;
  padding: 1.5rem 2rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: space-between;
  height: 70px;
`;

const PageNav = () => {
  return (
    <Container>
      <RecordNumberSelector />
      <PageSelector />
    </Container>
  );
};

export default PageNav;
