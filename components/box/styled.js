import styled from "styled-components";
import globalColors from "../utils/color";
const StyledBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "stretch"};
  justify-content: ${(props) => props.justifyContent || "stretch"};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
  align-content: ${(props) => props.alignContent || "normal"};
  background: ${(props) => props.background || globalColors.black};
  border: ${(props) => props.border || "none"};
  outline: ${(props) => props.outline || "none"};
  white-space: ${(props) => props.whiteSpace || "normal"};
`;
export default StyledBox;
