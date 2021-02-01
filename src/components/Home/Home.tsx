// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ManualTestCreation from '../TestCreation/ManualTestCreation/ManualTestCreation';
import FileDirectory from '../FileDirectory/FileDirectory';
import Monaco from '../Monaco/Monaco';
// import * as monaco from 'monaco-editor'
// STYLES
import { Title } from '../../assets/stylesheets/styled-components/Global'
import './Home.scss'
import SideNavbar from '../SideNavBar/SideNavBar';
import { FileContext } from '../../providers/FileProvider';

const Home = () => {
  const { toggleTree } = useContext(FileContext)


  return (
    <div id="homeCont">
      <SideNavbar />
      <div id="homeGrid">
        <ToastContainer
          position="top-right"
          autoClose={2100}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Title id="homeHeader">pinocchio</Title>
        <div id="testMainRow">
          <div id="testColOne">
            {toggleTree && <FileDirectory />}
            <ManualTestCreation />
          </div>
          <div id="testColTwo">
            <Monaco />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
