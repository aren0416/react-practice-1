import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainFont = {
  fontColor: "#fff",
};

export const mainBgColor = {
  bg: "#1d1d1d",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}

    *{ box-sizing: border-box}
    a{ text-decoration: none; color: ${mainFont.fontColor};}
    body {
        background-color: ${mainBgColor.bg};
        letter-spacing: -1px;
    }
`;
