import React from "react";
import styled from "styled-components";
import SortingBar from "./SortingBar";
import PoolItem from "./PoolItem";
import DashboardHeader from "../DashboardHeader";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { Balance } from "../../../types/types";

const Container = styled.div`
  background-color: ${({ theme }) => theme.dashboardBg};
  height: calc(100vh - 70px);
  padding: 0 1.5rem;
`;

const Table = styled.div`
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.07);
`;

const PoolItems = styled.div`
  max-height: calc(100vh - 255px);
  overflow-y: auto;
`

const BalanceTable = () => {
  const balance: Balance = useSelector(
    (state: RootState) => state.balance.balance
  );
  const currentNumberOfRecords: number = useSelector(
    (state: RootState) => state.mixed.currentNumberOfRecords
  );
  const activePage: number = useSelector(
    (state: RootState) => state.mixed.currentPage
  );
  const firstShownIndex: number =
    (activePage * currentNumberOfRecords) - currentNumberOfRecords;
  const lastShownIndex: number = firstShownIndex + currentNumberOfRecords;
  
  return (
    <Container>
      <DashboardHeader />
      <Table>
        <SortingBar />
        <PoolItems>
          {balance.data.map((pool, index) => {
            if (index >= firstShownIndex && index < lastShownIndex)
              return <PoolItem key={index} pool={pool} index={index} />
            return null;
          })}
        </PoolItems>
      </Table>
    </Container>
  );
};

export default BalanceTable;
