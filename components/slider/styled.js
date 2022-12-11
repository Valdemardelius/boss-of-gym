import styled from "styled-components";

const StyledSlider = styled.div`
{
    autoPlay: ${(props) => props.autoPlay || "false"};
    autoPlayTime: ${(props) => props.autoPlay || "0"};
    width: ${(props) => props.width || "1rem"};
    height: ${(props) => props.height || "1rem"};
 }
`;
export default StyledSlider;
