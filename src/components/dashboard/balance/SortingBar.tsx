import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 0.75rem 2rem;
  background-color: ${({ theme }) => theme.dashboardHeader};
  border-radius: 0.2rem 0.2rem 0 0;
  height: 55px;
`;

const Text = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.textColor};
`;

const Protocol = styled(Text)`
  width: 20%;
  display: flex;
  flex-direction: row;
`;

const Pool = styled(Text)`
  width: 35%;
  display: flex;
  flex-direction: row;
`;

const Balance = styled(Text)`
  width: 25%;
  display: flex;
  flex-direction: row;
`;

const RiskStatus = styled(Text)`
  width: 20%;
  display: flex;
  flex-direction: row;
`;

const IconWrapper = styled.div`
  padding-left: 0.4rem;
  height: 100%;
  display: flex;
  align-items: center;
  svg {
    width: 20px;
    height: 10px;
    fill: white;
  }
`;

const SortingBar = () => {
  const OrderIcon = require("../../../assets/icons/OrderIcon").default;

  return (
    <Container>
      <Protocol>
        Protocol
        <IconWrapper>
          <OrderIcon></OrderIcon>
        </IconWrapper>
      </Protocol>
      <Pool>
        Pool
        <IconWrapper>
          <OrderIcon></OrderIcon>
        </IconWrapper>
      </Pool>
      <Balance>
        Balance
        <IconWrapper>
          <OrderIcon></OrderIcon>
        </IconWrapper>
      </Balance>
      <RiskStatus>
        Risk Status
        <IconWrapper>
          <OrderIcon></OrderIcon>
        </IconWrapper>
      </RiskStatus>
    </Container>
  );
};

export default SortingBar;
