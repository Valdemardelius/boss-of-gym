import React from "react";
import StyledButton from "./styled";
const Button=({label,children, ...rest}) => {
    return(
        <StyledButton {...rest}>
            {label}            
        </StyledButton>
    )
    
}
export default Button;