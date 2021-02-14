import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Import pages
import LogIn from "./Pages/login";
import Home from "./Pages/home";

function App() {
  //[Implement] If user is not logged in, send to login page, otherwise send to home
  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login" exact component={LogIn} />
          <Route path="/home" exact component={Home} />
          <Route
            path="/"
            render={() =>
              loggedIn ? <Redirect to="/home" /> : <Redirect to="/login" />
            }
          ></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
