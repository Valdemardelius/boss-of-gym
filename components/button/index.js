import React from "react";
import StyledBotton from "./styled";
const Button=({label,onClick, ...rest}) => {
    return(
        <StyledBotton onClick={onClick}>
            {label}            
        </StyledBotton>
    )
    
}
export default Button;