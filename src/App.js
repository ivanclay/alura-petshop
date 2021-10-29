import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './assets/css/base/base.css';
import Home from './pages/Home';
import Sobre from './pages/About';
import NotFound from './pages/NotFound';
import Header from "./components/header";

function App() {
  return (
    <>
      <BrowserRouter>
          <Header/>
          <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/sobre">
                <Sobre/>
              </Route>
              <Route path="*">
                <NotFound/>
              </Route>
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
