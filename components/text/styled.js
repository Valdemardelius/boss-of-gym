import styled from "styled-components";
const StyledText = styled.span`
color: ${(props) => props.color || "#000000"};
font-size: ${(props) => props.fontSize || "14px"};
font-weight: ${(props) => props. fontWeight || "normal"}
`

export default StyledText;