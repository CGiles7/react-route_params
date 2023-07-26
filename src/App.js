import React from "react";
import "../src/App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";

function Home() {
  return <p>Home</p>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/">Home</Link>
        </div>
        {Array(10)
          .fill()
          .map((ignoredValue, index) => index + 1)
          .map((id) => (
            <div key={id}>
              <Link to={`/user/${id}`}>User {id}</Link>
            </div>
          ))}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user/:userId" element={<UserProfile />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;