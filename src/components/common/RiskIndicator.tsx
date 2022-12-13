import styled from "styled-components";
import { ColorProps } from "../../types/types";

const Status = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
`;

const StatusIndicator = styled.div<ColorProps>`
  width: 6rem;
  border-radius: 15px;
  padding: 0.5rem;
  background-color: ${(props) => props.color};
  color: ${(props) => props.textColor};
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function RiskIndicator({ status }: { status: number }) {
  return (
    <Status>
      {(() => {
        switch (status) {
          case 1:
            return (
              <StatusIndicator
                color="rgba(202, 13, 13, 0.2)"
                textColor="#C92A2A"
              >
                Red
              </StatusIndicator>
            );
          case 2:
            return (
              <StatusIndicator
                color="rgba(248, 255, 168, 0.5)"
                textColor="#C7B40E"
              >
                Yellow
              </StatusIndicator>
            );
          case 3:
            return (
              <StatusIndicator
                color="rgba(40, 202, 13, 0.15)"
                textColor="#18A002"
              >
                Green
              </StatusIndicator>
            );
          default:
            return (
              <StatusIndicator
                color="rgba(40, 202, 13, 0.15)"
                textColor="18A002"
              >
                Green
              </StatusIndicator>
            );
        }
      })()}
    </Status>
  );
}

export default RiskIndicator;
