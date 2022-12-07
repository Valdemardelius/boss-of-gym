import React from "react";
import Button from "../../components/button";
import Text from "../../components/text";
import Box from "../../components/box";
const Index = () => {
  const onCLickButton = () => {
    console.log("1");
  };
  return (
    <div>
      <Box
        flexDirection="column-reverse"
        alignItems="center"
        justifyContent="flex-end"
        flexWrap="nowrap"
        alignContent="central"
        background="#f2df12"
      >
        <Button onClick={onCLickButton}>нажми меня</Button>
        <Text color="#f345f2" fontSize="24px" fontWeight="500">
          я съел инструктора нато
        </Text>
      </Box>
    </div>
  );
};
export default Index;
