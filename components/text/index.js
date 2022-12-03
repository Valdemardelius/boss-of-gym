import React from "react";
import StyledText from "./styled";
const Text = ({label, ...rest}) => {
  return <StyledText>
    {label}
  </StyledText>;
};
export default Text;
