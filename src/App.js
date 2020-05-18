import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {




  render() {

    return (
      <div>
        <Header/>
        <MainContainer {...this.state}/>
      </div>
    );
  }
}

export default App;
