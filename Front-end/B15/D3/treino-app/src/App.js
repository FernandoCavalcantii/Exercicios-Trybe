import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Form from "./form";
import Info from "./info";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Form } />
          <Route path="/info" component={ Info } />
        </Switch>
    </BrowserRouter>
    )
  }
}

export default App;
