import styled from "styled-components";
import StyledText from "../text/styled";

const StyledHeading = styled(StyledText)`
font-size: ${(props) => props.fontSize || "22px"};
`
export default StyledHeading;