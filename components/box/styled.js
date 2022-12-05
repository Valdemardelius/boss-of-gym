import styled from "styled-components";
const StyledBox = styled.div`
display: flex;
flex-direction: ${(props) => props.flexDirection || "row"};
align-items: ${(props) => props.alignItems || "stretch"};
justify-content: ${(props) => props.justifyContent || "stretch"};
flex-wrap: ${(props) => props.flexWrap || "nowrap"};
align-content: ${(props) => props.alignContent || "normal"};
background: ${(props) => props.background || "#ffffff"};
border: ${(props) => props.border || "none"};
outline: none;
`
export default StyledBox