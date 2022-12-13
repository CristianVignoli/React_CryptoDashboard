import styled from "styled-components";
import { ReactComponent as ShareIcon } from "../../../assets/icons/ShareIcon.svg";
import { useDispatch } from "react-redux";
import { openStatusModal } from "../../../store/mixed/MixedSlice";
import RiskIndicator from "../../common/RiskIndicator";
import { setCurrentRiskStatus } from "../../../store/balance/BalanceSlice";
import { AppDispatch } from "../../../store/store";
import { Pool } from "../../../types/types";

const Container = styled.div.attrs((props: { index: number }) => props)`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(190, 190, 190, 0.22);
  cursor: pointer;
  background-color: ${(props) =>
    props.index % 2 ? props.theme.primaryGridBg : props.theme.secondaryGridBg};
  transition: all ease-in-out 300ms;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;
const Text = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  margin: 0;
`;
const ProtocolContainer = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
`;
const ProtocolName = styled(Text)`
  margin-right: 1rem;
  align-items: center;
`;
const PoolContainer = styled.div`
  display: flex;
  width: 35%;
  align-items: center;
`;
const PoolName = styled(Text)`
  margin: 0rem 1rem;
  width: 30%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const Balance = styled(Text)`
  width: 25%;
`;

const PoolItem = ({ pool, index }: { pool: Pool; index: number }) => {
  const dispatch = useDispatch<AppDispatch>();

  function handleClick() {
    dispatch(setCurrentRiskStatus(pool.status));
    dispatch(openStatusModal());
  }

  const PoolIcon = require("../../../assets/icons/" + pool.iconName).default;
  return (
    <Container index={index} onClick={handleClick}>
      <ProtocolContainer>
        <ProtocolName>{pool.protocol}</ProtocolName>
        <ShareIcon />
      </ProtocolContainer>
      <PoolContainer>
        <PoolIcon />
        <PoolName>{pool.poolCode}</PoolName>
        <ShareIcon />
      </PoolContainer>
      <Balance>{pool.balance}</Balance>
      <RiskIndicator status={pool.status} />
    </Container>
  );
};

export default PoolItem;
