import React from "react";

import StyledText from "./styled";
const Text = ({ children, ...rest }) => {
  return <StyledText {...rest}>{children}</StyledText>;
};
export default Text;
