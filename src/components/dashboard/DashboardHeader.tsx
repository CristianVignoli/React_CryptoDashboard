import styled from "styled-components";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.4rem 0 0.4rem 0;
  height: 60px;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1.5;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 2;
`;
const Title = styled.h1`
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  font-size: 1.3rem;
  display: flex;
  align-items: center;
`;
const SearchBar = styled.input`
  height: 2.5rem;
  border-radius: 80px;
  border: 1px solid #dcdcdc;
  padding-left: 1rem;
  ::placeholder {
    color: #999999;
    font-weight: 400;
    font-size: 14;
  }
  background-color: white;
  width: 20rem;
`;
const WalletContainer = styled.div`
  display: flex;
  margin-left: 1rem;
  margin-right: 0.5rem;
  height: 2.5rem;
  width: 12rem;
  border-radius: 10rem;
  background-color: #cbe1ff;
  position: relative;
`;

const WalletLeft = styled.div`
  display: flex;
  align-self: flex-start;
  height: 2.5rem;
  width: 12rem;
  border-radius: 10rem;
  background-color: #e0eeff;
  z-index: 0;
  position: absolute;
  font-size: 14px;
  color: #383838;
`;

const WalletRight = styled.div`
  display: flex;
  align-self: flex-end;
  height: 2.5rem;
  width: 7.5rem;
  right: 0;
  border-radius: 8rem;
  background-color: #cbe1ff;
  position: absolute;
  justify-content: center;
  z-index: 1;
  font-size: 14px;
  color: #383838;
`;

const ETHIconWrapper = styled.div`
  padding-left: 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  align-self: center;
  svg {
    width: 16px;
    height: 13px;
    fill: white;
  }
`;

const WalletLeftText = styled.div`
  font-size: 12px;
  color: #383838;
  align-self: center;
`;

const WalletRightText = styled.div`
  font-size: 12px;
  color: #383838;
  align-self: center;
  justify-content: center;
  padding: 0 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const CopyIconWrapper = styled.div`
  border-radius: 100%;
  background-color: #cbe1ff;
  height: 2.5rem;
  width: 2.5rem;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 16px;
    height: 16px;
    fill: white;
  }
`;

const DashboardHeader = () => {
  const ETHIcon = require("../../assets/icons/ETHLogo").default;
  const address = useSelector((state: RootState) => state.user.address);
  const CopyIcon = require("../../assets/icons/CopyIcon").default;

  return (
    <Container>
      <TitleContainer>
        <Title>Immuna Monitor Portal</Title>
      </TitleContainer>
      <SearchContainer>
        <SearchBar placeholder="Search"></SearchBar>
        <WalletContainer>
          <WalletLeft>
            <ETHIconWrapper>
              <ETHIcon />
            </ETHIconWrapper>
            <WalletLeftText>ETH</WalletLeftText>
          </WalletLeft>
          <WalletRight>
            <WalletRightText>{address}</WalletRightText>
          </WalletRight>
        </WalletContainer>
        <CopyIconWrapper>
          <CopyIcon />
        </CopyIconWrapper>
      </SearchContainer>
    </Container>
  );
};

export default DashboardHeader;
