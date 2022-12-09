import React from "react";
import Button from "../../components/button";
import Text from "../../components/text";
import Box from "../../components/box";
import Heading from "../../components/heading";
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
        background="#f2df12"
      >
        <Button
          onClick={onCLickButton}
          border="1rem solid"
          borderColor="green"
          borderRadius= "15px"
        >
          нажми меня
        </Button>
        <Text color="#f345f2" fontSize="24px" fontWeight="500">
          я съел инструктора нато
        </Text>
      </Box>
    </div>
  );
};
export default Index;
