import React , { useContext }from "react";
import DescribeBlock from "./DescribeBlock";
import { TestContext } from "../../providers/TestProvider";
import GenerateTest from './GenerateTest';

const ManualTestCreation = (props) => {
  // const { test } = useContext(TestContext);

  // useEffect(() => {
  //   console.log(test);
  // }, [test]);

  return (
    <div>
      <h1>Manual Test Creation</h1>
      <button type="button">+Describe block</button>
      <DescribeBlock />
      <button>Export my Test</button>
    </div>
  );
};

export default ManualTestCreation;
