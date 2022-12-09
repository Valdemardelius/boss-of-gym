import React from "react";
import PropTypes from "prop-types";
import StyledText from "./styled";
const Text = ({ children, ...rest }) => {
  return <StyledText {...rest}>{children}</StyledText>;
};
Text.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.string,
  textAlign: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.func,
};

export default Text;
