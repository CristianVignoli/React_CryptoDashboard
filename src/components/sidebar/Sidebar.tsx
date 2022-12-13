import React from "react";
import styled from "styled-components";
import Menu from "./menu/Menu";

const BusinessLogoWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  height: 2rem;
  padding: 2.5rem;
  svg {
    width: 150px;
    height: 30px;
    fill: white;
  }
`;

const Container = styled.div`
  background-color: white;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Sidebar = () => {
  const BusinessLogo = require("../../assets/icons/BusinessLogo").default;
  return (
    <Container>
      <BusinessLogoWrapper>
        <BusinessLogo />
      </BusinessLogoWrapper>
      <Menu />
    </Container>
  );
};

export default Sidebar;
