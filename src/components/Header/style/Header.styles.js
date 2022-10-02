import styled from "styled-components";

const StyledHeader = styled.section`
  height: 74px;
  width: 100%;
  background-color: ${({ theme }) => theme.BgColors.header};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1202px;
  width: 100%;
  height: 100%;
  margin: auto;
  flex-flow: row-reverse;
`;

const Nav = styled.nav`
  display: flex;
  direction: ltr;
  & > img:nth-of-type(1) {
    width: 85px;
    margin-right: 5px;
  }
  & > img:nth-of-type(2) {
    width: 60px;
  }
  & > img:nth-of-type(3) {
    width: 44px;
    margin-left: 22px;
  }
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ItemText = styled.div`
  & > h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: ${({ theme }) => theme.TextColors.primary};
  }
  & > p {
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;
    color: ${({ theme }) => theme.TextColors.primary};
  }
`;

export { StyledHeader, Container, Nav, Profile, Wrap, ItemText };
