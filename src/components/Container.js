import styled from "styled-components";

const SContainer = styled.div`
  padding: 0 80px;
`;

export const Container = ({ children }) => {
  return <SContainer>{children}</SContainer>;
};
