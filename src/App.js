import React from "react";
import "../src/App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import UserProfile from "./UserProfile";
import BackButton from "./BackButton";
import ForwardButton from "./ForwardButton";
import GoHomeButton from "./GoHomeButton";


function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <BackButton>Back</BackButton>
          <ForwardButton>Forward</ForwardButton>
          <GoHomeButton>Home</GoHomeButton>
        </div>
        {Array(10)
          .fill()
          .map((ignoredValue, index) => index + 1)
          .map((id) => (
            <div key={id}>
              <Link to={`/user/${id}`}>User {id}</Link>
            </div>
          ))}
        <Switch>
          <Route path="/user/:userId">
            <UserProfile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;