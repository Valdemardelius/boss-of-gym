import React from "react";
import Button from "../../components/button";
import Text from "../../components/text";
const Index = () => {
  const onCLickButton = () => {
    console.log("1");
  };
  return (
    <div>
      <Button label="нажми меня!" onClick={onCLickButton} />
      <Text label="я съел инструктора нато"/>
    </div>
  );
};
export default Index;
