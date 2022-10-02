import React from "react";
import {
  StyledHeader,
  Container,
  Nav,
  Profile,
  Wrap,
  ItemText,
} from "./style/Header.styles";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Wrap>
          <Nav>
            <img src="./assets/Header/godar-text.svg" alt="godar-text" />
            <img src="./assets/Header/godar-icon.svg" alt="godar-icon" />
            <img src="./assets/Header/message.svg" alt="message-icon" />
          </Nav>
          <Profile>
            <img src="./assets/Header/User.svg" alt="user-icon" />
            <ItemText>
              <h2>فاطمه محمدزاده</h2>
              <p>مدیر سامانه</p>
            </ItemText>
          </Profile>
        </Wrap>
      </Container>
    </StyledHeader>
  );
};
