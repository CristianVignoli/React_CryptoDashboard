import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { setCurrentPage } from "../../../store/mixed/MixedSlice";

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 7%;
  padding: 0.25rem;
`;

const Button = styled.div`
  background-color: ${({ theme }) => theme.dashboardBg};
  border-radius: 15%;
  margin: 0 0.25rem;
  cursor: pointer;
  user-select: none;
`;

const InactivePageButton = styled(Button)`
  padding: 0.25rem 0.5rem;
`;

const ActivePageButton = styled(InactivePageButton)`
  background-color: ${({ theme }) => theme.primary};
  color: white;
`;

const ArrowButton = styled(Button)`
  padding: 0.25rem 1rem;
`;

const BackButton = styled(ArrowButton).attrs(
  (props: { activePage: number }) => props
)`
  display: ${(props) => (props.activePage !== 1 ? "block" : "none")};
`;

const ForwardButton = styled(ArrowButton).attrs(
  (props: { activePage: number; totalPages: number }) => props
)`
  display: ${(props) =>
    props.activePage !== props.totalPages ? "block" : "none"};
`;

const PageSelector = () => {
  var recordsNumber: number = useSelector(
    (state: RootState) => state.balance.balance.data.length
  );
  const currentNumberOfRecords: number = useSelector(
    (state: RootState) => state.mixed.currentNumberOfRecords
  );
  const activePage: number = useSelector(
    (state: RootState) => state.mixed.currentPage
  );
  var totalPages: number = Math.trunc(recordsNumber / currentNumberOfRecords);
  if (recordsNumber % currentNumberOfRecords > 0) totalPages += 1;

  const list = Array.from({ length: totalPages }, (_, i) => i + 1);

  const dispatch = useDispatch();
  function setActivePage(page: number) {
    dispatch(setCurrentPage(page));
  }
  function gotoPreviousPage() {
    dispatch(setCurrentPage(activePage - 1));
  }
  function gotoNextPage() {
    dispatch(setCurrentPage(activePage + 1));
  }

  return (
    <Container>
      <BackButton activePage={activePage} onClick={gotoPreviousPage}>
        &lt;
      </BackButton>
      {list.map((page) =>
        page === activePage ? (
          <ActivePageButton key={page} onClick={() => setActivePage(page)}>
            {page}
          </ActivePageButton>
        ) : (
          <InactivePageButton key={page} onClick={() => setActivePage(page)}>
            {page}
          </InactivePageButton>
        )
      )}
      <ForwardButton
        activePage={activePage}
        totalPages={totalPages}
        onClick={gotoNextPage}
      >
        &gt;
      </ForwardButton>
    </Container>
  );
};

export default PageSelector;
