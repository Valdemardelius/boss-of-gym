import styled from "styled-components";
const StyledBox = styled.div`
display: flex;
flex-direction: ${(props) => props.flexDirection || "row"};
align-items: ${(props) => props.alignItems || "center"};
justify-content: ${(props) => props.justifyContent || "center"};
flex-wrap: ${(props) => props.flexWrap || "nowrap"};
align-content: ${(props) => props.alignContent || "normal"};
`
export default StyledBox