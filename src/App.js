import React, { Component } from "react"
import './App.css';
import Navbar from './components/navbar/navbar'
import ApplicationViews from './components/applicationViews'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
      return (
          <React.Fragment>
              <Navbar />
              <ApplicationViews />
          </React.Fragment>
      )
  }
}

export default App
