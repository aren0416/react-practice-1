import { BallTriangle } from "react-loader-spinner";
import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Wrap>
      <BallTriangle
        heigth="100"
        width="100"
        color="crimson"
        ariaLabel="loading-indicator"
      />
    </Wrap>
  );
};
