import React from "react";
import MenuLink from "./MenuLink";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

const Menu = () => {
  return (
    <Container>
      <MenuLink title="Dashboard" iconName={"dashboard"} />
      <MenuLink title="Alerts" iconName={"alerts"} />
      <MenuLink title="Defend" iconName={"defend"} />
      <MenuLink title="Protect" iconName={"protect"} />
    </Container>
  );
};

export default Menu;
