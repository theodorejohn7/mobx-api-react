// import logo from './logo.svg';
import './App.css';
import RestaurantList from './mobx/RestaurantList';
import { Route } from 'react-router';
import {Router} from 'react-router';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <Router>
      <Route path="/" exact component={RestaurantList} />
    </Router>
  );
}

export default App;
