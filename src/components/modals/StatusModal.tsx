import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { closeStatusModal } from "../../store/mixed/MixedSlice";
import RiskIndicator from "../common/RiskIndicator";
import { RootState } from "../../store/store";

const Container = styled.div`
  left: 20%;
  top: 20%;
  width: 60%;
  max-height: 45%;
  background-color: white;
  position: absolute;
  z-index: 10;
  border-radius: 0.4rem;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.div`
  align-self: flex-start;
  padding: 1rem 0 1rem 2rem;
  color: #242424;
  font-size: 14px;
`;

const CloseIconWrapper = styled.div`
  display: flex;
  align-self: center;
  justify-content: flex-end;
  padding-right: 1rem;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const LineDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #c2c2c2;
  margin-bottom: 1rem;
`;

const RiskStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 1rem;
`;

const Content = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
`;

const RiskText = styled.div`
  font-size: 16px;
  color: #272727;
  padding-right: 1rem;
`;

const RiskDescriptionContent = styled.div`
  background-color: #e5e5e5;
  height: 14rem;
  width: 100%;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

const UpperText = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: row;
  padding: 1.5rem 1rem 1rem 1rem;
`;
const Trigger = styled.div`
  color: #5c5c5c;
  flex: 1;
`;
const TriggerContent = styled.div`
  color: #2f2f2f;
  padding-top: 0.5rem;
`;
const EventSummary = styled.div`
  color: #5c5c5c;
  flex: 1;
`;
const EventSummaryContent = styled.div`
  color: #2f2f2f;
  padding-top: 0.5rem;
`;
const LowerText = styled.div`
  font-size: 12px;
  padding: 1rem;
`;
const Details = styled.div`
  color: #5c5c5c;
  flex: 1;
`;

const DetailsContent = styled.div`
  color: #2f2f2f;
  padding-top: 0.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Button = styled.div`
  display: flex;
  width: 13rem;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  background-color: #1d7dea;
  border-radius: 5rem;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
`;

function StatusModal() {
  const ExitIcon = require("../../assets/icons/ExitIcon").default;
  const currentRiskStatus = useSelector(
    (state: RootState) => state.balance.currentRiskStatus
  );
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(closeStatusModal());
  }

  return (
    <Container>
      <Header>
        <Text>Status</Text>
        <CloseIconWrapper onClick={handleClick}>
          <ExitIcon />
        </CloseIconWrapper>
      </Header>
      <LineDivider />
      <Content>
        <RiskStatusContainer>
          <RiskText>Risk Status</RiskText>
          <RiskIndicator status={currentRiskStatus} />
        </RiskStatusContainer>
        <RiskDescriptionContent>
          <UpperText>
            <Trigger>
              Trigger:
              <TriggerContent>
                The asset's risk profile has changed significantly.
              </TriggerContent>
            </Trigger>
            <EventSummary>
              Event Summary:
              <EventSummaryContent>
                A significant amount of Compound were transferred.
              </EventSummaryContent>
            </EventSummary>
          </UpperText>
          <LowerText>
            <Details>
              Details:
              <DetailsContent>
                [Token % out of the entire circulation] 0.58% were transferred.
                A significant movement is detected when there are more than 1%
                of the tokens in circulation that were moved in a single
                transaction. Such a significant movement usually triggers
                movements in the asset's price and therefor should be monitored
                closely.
              </DetailsContent>
            </Details>
          </LowerText>
        </RiskDescriptionContent>
      </Content>
      <ButtonContainer>
        <Button onClick={handleClick}>Continue</Button>
      </ButtonContainer>
    </Container>
  );
}

export default StatusModal;
