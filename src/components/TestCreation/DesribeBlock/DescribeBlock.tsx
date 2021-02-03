/* eslint-disable import/no-unresolved */ // ! Be careful
// REACT LIBRARIES
// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react';
// GLOBAL STATE PROVIDERS
import { TestContext } from '../../../providers/TestProvider';
import { FileContext } from '../../../providers/FileProvider';
// REACT COMPONENTS
import ItBlock from '../ItBlock/ItBlock';
// STYLES
import './DescribeBlock.scss';
import {
  Button,
  Form,
  Input,
  Label,
  SubHeader,
} from '../../../assets/stylesheets/styled-components/Global';

const DescribeBlock = () => {
  // GLOBAL STATE
  const { test, handleDBlockDescription, addItBlock }: any = useContext(TestContext);
  const { testFileName, setTestFileName }: any = useContext(FileContext);
  // label for next it-block index
  const newItIndex = Object.keys(test.nestedIts).length;

  // Iterate through 'nestedIts' property and create itBlock components for each
  // Each component will have its own index to reference to state
  const itArray: Array<any> = [];
  Object.keys(test.nestedIts).forEach((key: any) => itArray.push(<ItBlock key={`it-${key}`} itIndex={key} />));

  return (
    <div id="describeCont">
      <SubHeader id="getStartedTestHeader">Get Started</SubHeader>
      <section id="getStartedSection">
        <Form id="describeForm">
          <Label>1. Name Your Test File: </Label>
          {/* update testFileName in FileProvider based off user input */}
          <Input placeholder="ex: pinocchio.test" id="describeInput" required value={testFileName} onChange={(e: any) => setTestFileName(e.target.value)} />
        </Form>
        <Form id="describeForm">
          <Label>2. Describe the Test:</Label>
          {/* update state's dDescription property based off user input */}
          <Input
            type="text"
            value={test.dDescription}
            placeholder="What are you testing?"
            onChange={(e: any) => handleDBlockDescription(e.target.value)}
            id="describeInput"
            required
          />
        </Form>
      </section>
      {itArray}
      <div id="describeButtonCont">
        <Button type="button" onClick={() => addItBlock(newItIndex)}>
          +It Statement
        </Button>
        {/* Below is button we would have for multiple Describe block feature implementation */}
        {/* <Button type="button">+Describe block:</Button> */ /* For multiple Describe blocks */}
      </div>
    </div>
  );
};

export default DescribeBlock;
