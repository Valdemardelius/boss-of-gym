import React, { Children } from "react";
import PropTypes from "prop-types"
import StyledSlider from "./styled";

const Slider=({children, ...rest}) => {
return(
    <StyledSlider{...rest}>{children}</StyledSlider>
)
}
Slider.propsTypes ={
    autoPlay: PropTypes.boolean,
    autoPlayTime: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,

}
