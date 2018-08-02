import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import Routers from './route';
import appState from './store/test';

class App extends Component {

  render() {
    return (
      <div>
          <Provider appState={appState} >
            <Routers />
          </Provider>
      </div>
        
    );
  }
}

export default App;
