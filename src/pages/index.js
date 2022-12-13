import React from "react";
import Button from "../../components/button";
import Text from "../../components/text";
import Box from "../../components/box";
import Heading from "../../components/heading";
import Slider from "../../components/slider";
const changeSlide = (direction = 1) => {
  let slideNumber = 0;

  if (slide + direction < 0) {
    slideNumber = items.length - 1;
  } else {
    slideNumber = (slide + direction) % items.length;
  }
}
const Index = () => {
  const onCLickButton = () => {
    console.log("1");
  };
  return (
    <div>
      <Box
        justifyContent="flex-end"
        flexWrap="nowrap"
        alignContent="central"
        background="green"
      >
        <Heading fontSize="43px">aboba</Heading>
      </Box>

      <Box
        flexDirection="column-reverse"
        alignItems="center"
        justifyContent="flex-end"
        flexWrap="nowrap"
        alignContent="central"
        background = "#f471ff"
      >
        <Button
          cursor="pointer"
          onClick={onCLickButton}
          boxSizing = "border-box"
          borderColor="green"
          fontSize= "1.7rem"
          background="linear-gradient(130deg, #f00 93%, transparent 90%)"
        >
          <Text color="#fff0f2" fontSize="20px" fontWeight="500" textAlign="center">Нажми меня</Text>
        </Button>
        <Text color="#fff0f2" fontSize="24px" fontWeight="500">
          я съел инструктора нато
        </Text>
      </Box>
      <Box><Slider width="12px" height="12px" autoPlayTime = "on" >123</Slider></Box>
    </div>
  );
};
export default Index;
