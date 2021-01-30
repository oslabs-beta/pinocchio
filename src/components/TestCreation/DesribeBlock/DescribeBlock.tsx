import React, { useContext } from 'react';
import ItBlock from '../ItBlock/ItBlock';
import { TestContext } from '../../../providers/TestProvider'
// STYLES
import "./DescribeBlock.scss";
import {
  Button,
  Form,
  Input,
  Label,
  SubHeader,
} from "../../../assets/stylesheets/styled-components/Global";

const DescribeBlock = (props) => {
  const { test, handleDBlockDescription, addItBlock } = useContext(TestContext);
  const newItIndex = Object.keys(test.nestedIts).length;

  const itArray = [];
  for (let key in test.nestedIts) {
    itArray.push(
      <ItBlock
      key={`it-${key}`} 
      itIndex={key} 
    />)
}
  return (
    <div id="describeCont">
      <SubHeader>Describe Block</SubHeader>
      <Form>
        <Label> Describe Block</Label>
        <Input
          type="text"
          value={test.dDescription}
          placeholder="What are you testing?"
          onChange={(e) => handleDBlockDescription(e.target.value)}
          id="describeInput"
        />
      </Form>
      <div id="describeButtonCont">
      <Button 
      type="button"
      onClick={(e) => addItBlock(newItIndex)}
      >
        +It Statement
      </Button>
      {/* <Button type="button">+Describe block</Button> */}
      </div>
      {itArray}
    </div>
  );
};

export default DescribeBlock;
