import React , { useContext }from "react";
import DescribeBlock from "../DesribeBlock/DescribeBlock";
import { TestContext } from "../../../providers/TestProvider";
import { FileContext } from "../../../providers/FileProvider";
import GenerateTest from '../GenerateTest';
import { fileInterface } from '../../../utils/fileTypes';

// allow communicaiton between react app and electron renderer
const { remote } = window.require('electron');
// allow remote process to have access to node fs module
const electronFs = remote.require('fs');

// STYLES
import './ManualTestCreation.scss';
import { Button, Header, Input, Label } from "../../../assets/stylesheets/styled-components/Global";


// TODO: allow user to name their own test
const ManualTestCreation = (props) => {
  const { testFileName, setTestFileName } = useContext(FileContext);

  return (
    <div id='testCont'>
      <Header id='manTestHeader'>Manual Test Creation</Header>
      <Label>Test File Name</Label>
        <Input
          type="text"
          value={testFileName}
          placeholder="Name your test file"
          onChange={(e) => {setTestFileName(e.target.value)}}
          id="describeInput"
        />
      {/* <div id='newButtonCont'>
      <Button type="button">New Describe Block</Button>
      </div> */}
      <DescribeBlock />
    </div>
  );
};
export default ManualTestCreation;
