import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthContainer from "./containers/Auth";
import NavContainer from "./containers/Nav";
import Home from "./components/Home";
import Loader from "./components/Loader";
import About from "./components/About";
import CreateTaskScreenContainer from "./containers/CreateTaskScreen";
import ProtectedRoute from "./containers/ProtectedRoute";
import "./App.css";

function App({ isLoading }) {
  return (
    <BrowserRouter>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="App">
          <NavContainer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={AuthContainer} />
            <Route path="/about" component={About} />
            <ProtectedRoute
              path="/create"
              component={CreateTaskScreenContainer}
            />
          </Switch>
        </div>
      )}
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.app.isLoading
  };
};

export default connect(mapStateToProps)(App);
