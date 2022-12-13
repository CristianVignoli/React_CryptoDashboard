import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 0.6rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 3px;
  height: 70px;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 2;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

export const ProfileImg = styled.img`
  height: 2rem;
  margin: 0 1rem;
  cursor: pointer;
`;

export const ProfileName = styled.h2`
  font-size: 16px;
  font-weight: 400;
`;

export const CurrentView = styled.h2`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-self: flex-start;
  margin-right: 2rem;
  margin-left: 1rem;
`;

export const SearchField = styled.input`
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

export const ProfileIconWrapper = styled.div`
  padding: 0 1rem 0 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  svg {
    width: 8px;
    height: 4px;
    fill: white;
  }
`;
