import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";

const SHeader = styled.header`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 26px;
  font-weight: 900;
`;

const MenuWrap = styled.ul`
  display: flex;
`;

const Menu = styled.li`
  margin-left: 30px;
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={routes.home}>React Practice1</Link>
      </Logo>
      <MenuWrap>
        <Menu>
          <Link to={routes.home}>Home</Link>
        </Menu>
        <Menu>
          <Link to={routes.search}>search</Link>
        </Menu>
      </MenuWrap>
    </SHeader>
  );
};
