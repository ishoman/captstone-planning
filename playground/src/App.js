import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';


const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" render={() => <h1>About</h1>} />
    </div>
  </Router>
);


export default App;
