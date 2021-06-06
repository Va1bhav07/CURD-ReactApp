import React from "react";
import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
`;

function Loader() {
  return (
    <StyledDiv>
      <Spinner animation="border" variant="primary" />
    </StyledDiv>
  );
}

export default Loader;
