import React, { Component } from "react"
import './App.css';
import Navbar from './components/navbar/navbar'
import ApplicationViews from './components/applicationViews'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    state = {
        activeUser: JSON.parse(sessionStorage.getItem("credentials"))
    }
    setUser = (user) => {
        this.setState({
            activeUser: user
        }) 
    }

  render() {
      return (
          <React.Fragment>
              <Navbar setUser={this.setUser} activeUser={this.state.activeUser}/>
              <ApplicationViews setUser={this.setUser} activeUser={this.state.activeUser} />
          </React.Fragment>
      )
  }
}

export default App