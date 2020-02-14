import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedButtonCircle: 1
    }
  }

  handleButtonCircleSelection = (idx) => {
    this.setState({selectedButtonCircle: idx})
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector selectedButtonCircle={this.state.selectedButtonCircle} handleButtonCircleSelection={this.handleButtonCircleSelection}/>
          <Circles selectedButtonCircle={this.state.selectedButtonCircle} handleButtonCircleSelection={this.handleButtonCircleSelection}/>
        </main>
      </div>
    );
  }
}

export default App;