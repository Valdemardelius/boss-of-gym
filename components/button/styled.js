import styled from "styled-components";

const StyledButton = styled.button`
  white-space: ${(props) => props.whiteSpace || "normal"};
  outline: ${(props) => props.outline || "none"};
  box-sizing: ${(props) => props.boxSizing || "border-box"};
  letter-spacing: ${(props) => props.letterspacing || "normal"};
  border-color: ${(props) => props.borderColor || "none"};
  border-radius: ${(props) => props.borderRadius || "none"};
`;

export default StyledButton;
