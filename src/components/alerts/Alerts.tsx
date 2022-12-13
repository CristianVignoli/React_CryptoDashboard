import styled from "styled-components";
import Nav from "../common/Nav";

const Container = styled.div`
  width: auto;
  margin-left: 16rem;
  position: relative;
`;

const InnerDashoard = styled.div`
  background-color: ${({ theme }) => theme.dashboardBg};
  height: calc(100vh - 4rem);
  padding: 0 1.5rem;
`;

const Alerts = () => {
  return (
    <Container>
      <Nav title={"Alerts"} />
      <InnerDashoard />
    </Container>
  );
};

export default Alerts;
