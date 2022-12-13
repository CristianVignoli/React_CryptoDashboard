import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { NavProps } from "../../types/types";
import {
  Container,
  SearchContainer,
  CurrentView,
  SearchField,
  ProfileContainer,
  ProfileImg,
  ProfileName,
  ProfileIconWrapper,
} from "./Nav.styled";

const Nav = (props: NavProps) => {
  const userName = useSelector((state: RootState) => state.user.name);
  const ProfileIcon = require("../../assets/icons/ProfileIcon").default;
  const NotificationIcon =
    require("../../assets/icons/NotificationIcon").default;
  return (
    <Container>
      <SearchContainer>
        <CurrentView>{props.title}</CurrentView>
        <SearchField placeholder="Search..."></SearchField>
      </SearchContainer>
      <ProfileContainer>
        <NotificationIcon />
        <ProfileImg src={require("../../assets/images/ProfileImage.png")} />
        <ProfileName> {userName} </ProfileName>
        <ProfileIconWrapper>
          <ProfileIcon />
        </ProfileIconWrapper>
      </ProfileContainer>
    </Container>
  );
};

export default Nav;
