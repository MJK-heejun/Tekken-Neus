import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainPage from './components/pages/MainPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <MainPage></MainPage>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
