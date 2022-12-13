import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { setCurrentNumberOfRecords, setCurrentPage } from "../../../store/mixed/MixedSlice";

const MINIMUM_VIEW_RANGE = 5;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Selector = styled.select`
  padding: 0.5rem;
  margin: 0 0.5rem;
  border: 1px solid #e0e7ed;
  border-radius: 15%;
`;
const Option = styled.option``;

const Text = styled.div`
  white-space: nowrap;
`;

const ReactNumberSelector = () => {
  const recordsNumber: number = useSelector(
    (state: RootState) => state.balance.balance.data.length
  );
  var optionsNumber: number = recordsNumber / MINIMUM_VIEW_RANGE;
  if (recordsNumber % MINIMUM_VIEW_RANGE > 0) optionsNumber += 1;

  const [list, setList] = useState(
    Array.from(
      { length: optionsNumber },
      (_, i) => (i + 1) * MINIMUM_VIEW_RANGE
    )
  );

  useEffect(() => {
    setList(
      Array.from(
        { length: optionsNumber },
        (_, i) => (i + 1) * MINIMUM_VIEW_RANGE
      )
    );
  }, [recordsNumber]) // eslint-disable-line react-hooks/exhaustive-deps

  const dispatch = useDispatch();
  function handleSelectionChange() {
    var selectElement = document.getElementById(
      "records"
    ) as HTMLSelectElement | null;
    var selectedNumberOfRecords: number;
    if (selectElement != null)
      selectedNumberOfRecords =
        parseInt(selectElement.options[selectElement.selectedIndex].value);
    else selectedNumberOfRecords = 5;

    dispatch(setCurrentNumberOfRecords(selectedNumberOfRecords));
    dispatch(setCurrentPage(1));
  }

  return (
    <Container>
      <Text>Show</Text>
      <Selector name="records" id="records" onChange={handleSelectionChange}>
        {list.map((number) => {
          return (
            <Option value={number} key={number}>
              {number}
            </Option>
          );
        })}
      </Selector>
      <Text>results of {recordsNumber} entries</Text>
    </Container>
  );
};

export default ReactNumberSelector;
