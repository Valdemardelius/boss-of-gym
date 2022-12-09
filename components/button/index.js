import React from "react";
import PropTypes from "prop-types"
import StyledButton from "./styled";
const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

Button.propTypes = {
  outline: PropTypes.string,
  boxSizing: PropTypes.string,
  letterspacing: PropTypes.string,
  border: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
