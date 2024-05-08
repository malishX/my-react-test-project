import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UniversityList from "./components/UniversityList";
import UniversityDetails from "./components/UniversityDetails";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UniversityList} />
        <Route path="/details/:id" component={UniversityDetails} />
      </Switch>
    </Router>
  );
};

export default App;
