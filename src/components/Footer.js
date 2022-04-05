import styled from "styled-components";
import { mainFont } from "./styles/GlobalStyled";

const SFooter = styled.footer`
  border-top: 1px solid #555;
  margin-top: 200px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${mainFont.fontColor};
`;

export const Footer = () => {
  return (
    <SFooter>
      <p>React Practice1 &copy; {new Date().getFullYear()}</p>
    </SFooter>
  );
};
