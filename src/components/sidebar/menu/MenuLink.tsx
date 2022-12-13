import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { setCurrentView } from "../../../store/mixed/MixedSlice";
import { ActiveMenuLink, MenuLinkProps } from "../../../types/types";

// interface ActiveMenuLink {
//   active: boolean | undefined;
// }

// type MenuLinkProps = {
//   title: string;
//   active?: boolean;
//   iconName: string;
// };

const Container = styled.div<ActiveMenuLink>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  margin: 1rem 2rem 1rem 2rem;
  height: 2.5rem;
  border-radius: 12px;
  background-color: ${(props) => (props.active ? props.theme.primary : null)};
`;

const Title = styled.h1<ActiveMenuLink>`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.active ? "#ffffff" : "#4D4D4D")};
  opacity: 0.9;
  text-align: left;
  width: 100%;
  padding-left: 0.5rem;
`;

const IconWrapper = styled.div`
  padding-left: 2.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  svg {
    width: 20px;
    height: 13px;
    fill: white;
  }
`;

const MenuLink = ({ title, iconName }: MenuLinkProps) => {
  const dispatch = useDispatch();
  const currentView = useSelector(
    (state: RootState) => state.mixed.currentView
  );
  const [active, setActive] = useState(false);
  const [color, setColor] = useState("4D4D4D");

  useEffect(() => {
    if (currentView === iconName) {
      setActive(true);
      setColor("#F4F4F4");
    } else {
      setActive(false);
      setColor("#4D4D4D");
    }
  }, [currentView]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleClick() {
    dispatch(setCurrentView(iconName));
  }

  const MenuIcon = require("../../../assets/icons/" +
    iconName +
    "Icon").default;

  return (
    <Container active={active} onClick={handleClick}>
      <IconWrapper>
        <MenuIcon color={color} />
      </IconWrapper>
      <Title active={active}>{title}</Title>
    </Container>
  );
};

export default MenuLink;
