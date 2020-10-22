import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import FormList from "./FormList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route exact path="/form-list">
            <FormList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
