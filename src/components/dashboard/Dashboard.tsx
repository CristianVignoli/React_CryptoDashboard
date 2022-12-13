import styled from "styled-components";
import Nav from "../common/Nav";
import BalanceTable from "./balance/BalanceTable";
import PageNav from "../common/pagenav/PageNav";

const Container = styled.div`
  width: auto;
  margin-left: 16rem;
  position: relative;
`;

const Dashboard = () => {
  return (
    <Container>
      <Nav title={"Dashboard"} />
      <BalanceTable />
      <PageNav />
    </Container>
  );
};

export default Dashboard;
