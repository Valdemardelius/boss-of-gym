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
      <Box flexDirection="column-reverse" alignItems="center" justifyContent="flex-end" flexWrap = "nowrap" alignContent = "central" >
        <Button label="нажми меня!" onClick={onCLickButton} />
        <Text label="я съел инструктора нато" />
      </Box>
    </div>
  );
};
export default Index;
