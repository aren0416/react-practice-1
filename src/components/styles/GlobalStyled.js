import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainFont = {
  fontColor: "#fff",
};

export const mainDesc = {
  fontSize: "18px",
  fontWeight: "300",
  color: `${mainFont.fontColor}`,
  lineHeight: "1.8rem",
  opacity: "0.8",
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
        word-break: keep-all;
        font-family: 'Noto Sans KR', sans-serif;
    }
`;
