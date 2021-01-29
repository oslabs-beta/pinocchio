import React, { useContext } from "react";
import ItBlock from "./ItBlock";
import { TestContext } from "../../providers/TestProvider";

// STYLES
import "./DescribeBlock.scss";
import {
  Button,
  Form,
  Input,
  Label,
  SubHeader,
} from "../../assets/stylesheets/styled-components/Global";

const DescribeBlock = (props) => {
  const { test, handleDBlockDescription } = useContext(TestContext);

  return (
    <div id="describeCont">
      <SubHeader>Describe Block</SubHeader>
      <Form>
        <Label>Describe:</Label>
        <Input
          type="text"
          value={test.description}
          placeholder="What are you testing?"
          onChange={(e) => handleDBlockDescription(e.target.value)}
          id="describeInput"
        />
      </Form>
      <div id="describeButtonCont">
        <Button type="button">Add It Statement</Button>
        <Button type="button">Add Nested Describe</Button>
      </div>
      <ItBlock />
    </div>
  );
};

export default DescribeBlock;
