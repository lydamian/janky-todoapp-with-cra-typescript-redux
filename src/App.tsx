import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Todo from "./pages/todo/Todo";
import { Provider } from 'react-redux'
import store from './redux/store'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/todo">
              <Todo />
            </Route>
          </Switch>
      </Router>
      </div>
    </Provider>
  );
}

export default App;
