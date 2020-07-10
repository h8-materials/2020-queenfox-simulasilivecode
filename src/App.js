import React from "react";
import { Home, Create } from "./pages";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create-task">Form</Link>
          </li>
        </ul>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Create} path="/create-task" exact />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
