import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';
// import FileProvider from './providers/FileProvider';

// const mainElement = document.createElement('div');
// document.body.appendChild(mainElement);

const App = () => {
  // state/context

  return (
    // <FileProvider>
    <div>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/home" component={Home}/>
      </Switch>
    </div >
    // </FileProvider >

  )
};

// ReactDom.render(<App />, mainElement);

export default App;
