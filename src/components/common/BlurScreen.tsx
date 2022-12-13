import styled from "styled-components";

const Container = styled.div`
  bottom: 0;
  top: 0;
  background-color: black;
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  opacity: 0.3;
`;

function BlurScreen() {
  return <Container />;
}

export default BlurScreen;
