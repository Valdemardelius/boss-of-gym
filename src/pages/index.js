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
        background="#f23f45"
      >
        <Button onClick={onCLickButton}>нажми меня</Button>
        <Text color="green">я съел инструктора нато</Text>
      </Box>
    </div>
  );
};
export default Index;
