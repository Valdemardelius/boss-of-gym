import React from "react";
import StyledHeading from "./styled";

const Heading = ({ children, ...rest }) => {
  return <StyledHeading {...rest}>{children}</StyledHeading>;
};

export default Heading;
