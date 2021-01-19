// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Link } from 'react-router-dom';
import FileDirectory from '../components/FileDirectory';
import ManualTestCreation from './TestCreation/ManualTestCreation';
function Home() {
  return (
    <div>
      <h1>Hi Home!</h1>
      <FileDirectory />
      <ManualTestCreation />
      <Link to="/">
        Go To Landing
      </Link>

    </div>
  );
}

export default Home;
