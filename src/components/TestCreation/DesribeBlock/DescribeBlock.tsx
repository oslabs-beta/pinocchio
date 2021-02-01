// REACT LIBRARIES
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
  const { test, handleDBlockDescription, addItBlock }: any = useContext(TestContext);
  const { testFileName, setTestFileName }: any = useContext(FileContext);
  const newItIndex = Object.keys(test.nestedIts).length;

  const itArray: any = [];
  Object.keys(test.nestedIts).forEach((key: any) => itArray.push(<ItBlock key={`it-${key}`} itIndex={key} />));
  // for (let key in test.nestedIts) {
  //   itArray.push(<ItBlock key={`it-${key}`} itIndex={key} />);
  // }
  return (
    <div id="describeCont">
      <SubHeader id="getStartedTestHeader">Get Started</SubHeader>
      <section id="getStartedSection">
        <Form id="describeForm">
          <Label>1. Name Your Test File: </Label>
          <Input placeholder="ex: pinocchio.test" id="describeInput" required value={testFileName} onChange={(e: any) => setTestFileName(e.target.value)} />
        </Form>
        <Form id="describeForm">
          <Label>2. Describe the Test:</Label>
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
        {/* <Button type="button">+Describe block:</Button> */}
      </div>
    </div>
  );
};

export default DescribeBlock;
