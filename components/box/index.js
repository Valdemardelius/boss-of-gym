import React from "react";
import StyledBox from "./styled";
const Box = ({ children, ...rest }) => {
  return <StyledBox {...rest}>{children}</StyledBox>;
};
export default Box;
