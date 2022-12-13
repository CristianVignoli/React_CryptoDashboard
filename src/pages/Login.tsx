import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

const NavBar = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
`;

const BusinessLogoWrapper = styled.div`
  display: flex;
  padding-left: 6rem;
  svg {
    width: 150px;
    height: 30px;
    fill: white;
  }
`;

const ProfileImg = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 10rem;
  margin-right: 3rem;
  background-color: grey;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const BtcImg = styled.img`
  flex-shrink: 0;
  width: 50%;
  height: calc(100vh - 4rem);
`;

const FormContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.tertiary};
  width: 50%;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div`
  display: flex;
  width: 80%;
  height: 60%;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const TextTitle = styled.h2`
  margin: 3rem 0 0 0;
  font-weight: 500;
  font-size: 30;
  text-align: center;
  color: #3d3d3d;
`;

const TextSubTitle = styled.h4`
  margin: 0.8rem 0 4rem 0;
  font-weight: 400;
  font-size: 20;
  text-align: center;
  color: #2c2c2c;
  opacity: 0.8;
`;

const LabelContainer = styled.div`
  width: 85%;
  align-self: center;
  margin-bottom: 0.8rem;
  display: flex;
  flex-direction: row;
  max-width: 30rem;
`;

const Label = styled.label`
  font-weight: 400;
  font-size: 18;
  text-align: flex-start;
  opacity: 0.6;
`;

const ETHLogoWrapper = styled.div`
  margin-right: 0.5rem;
  svg {
    height: 15px;
    width: 10px;
    fill: white;
  }
`;

const InputField = styled.input`
  height: 3.3rem;
  width: 85%;
  align-self: center;
  border-radius: 80px;
  border: none;
  ::placeholder {
    color: #999999;
    font-weight: 400;
    font-size: 10;
  }
  background-color: #efefef;
  padding-left: 2rem;
  color: #999999;
  margin-bottom: 2rem;
  max-width: 30rem;
  min-height: 2.5rem;
`;

const FormButton = styled.button`
  height: 3.3rem;
  width: 85%;
  align-self: center;
  border-radius: 80px;
  border: none;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  max-width: 30rem;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 3rem;
  min-height: 2.5rem;
`;

function Login() {
  const BusinessLogo = require("../assets/icons/BusinessLogo").default;
  const ETHLogo = require("../assets/icons/ETHLogo").default;
  const navigate = useNavigate();

  function handleNavigation() {
    navigate("/dashboard");
  }
  return (
    <MainContainer>
      <NavBar>
        <BusinessLogoWrapper>
          <BusinessLogo />
        </BusinessLogoWrapper>
        <ProfileImg />
      </NavBar>
      <Content>
        <BtcImg src={require("../assets/images/BTCImage.png")} />
        <FormContainer>
          <Form>
            <TextTitle>Welcome to Immuna!</TextTitle>
            <TextSubTitle>Connect your wallet</TextSubTitle>
            <LabelContainer>
              <ETHLogoWrapper>
                <ETHLogo />
              </ETHLogoWrapper>
              <Label>Ethereum</Label>
            </LabelContainer>
            <InputField placeholder="Enter wallet address"></InputField>
            <FormButton onClick={handleNavigation}>
              Connect to Wallet
            </FormButton>
          </Form>
        </FormContainer>
      </Content>
    </MainContainer>
  );
}

export default Login;
