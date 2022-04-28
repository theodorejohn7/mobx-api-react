// import logo from './logo.svg';
// import './App.css';
 
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
  
//   );
// }

// export default App;


import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import JSONPretty from "react-json-pretty";

class App extends Component {
  componentDidMount() {
    this.props.WeatherStore.loadWeatherGenerator("Toronto, ON, Canada");
  }

  render() {
    return (
      <div className="App">
        <JSONPretty json={this.props.WeatherStore.weatherData} />
      </div>
    );
  }
}

export default inject("WeatherStore")(observer(App));