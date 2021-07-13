import "./App.css";
import React from "react";
import "./component/header.css";
import {
  setAuthorizationTokenHeader,
  setCurrentUser,
} from "./redux/actions/auth";
import jwtDecode from "jwt-decode";
import { configureStore } from "./redux";
import { Provider } from "react-redux";
import { SnackbarProvider } from 'notistack'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './Main'
const store = configureStore();

//checking to see after a refresh if token exists in session storage if it does we verify the validaty of it with decode and also sending it via axios to server with next request if tempered with force logout user
if (localStorage.jwtTokenv2v) {
  setAuthorizationTokenHeader(localStorage.jwtTokenv2v);
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtTokenv2v)));
  } catch (error) {
    store.dispatch(setCurrentUser({}));
  }
}

function App() {
  return (
    <div className="App">
      <header>
        <img src={"logo.svg"} alt={"logo"} />
      </header>
      <SnackbarProvider>
        <Provider store={store}>
          <Router>
            <Main></Main>
          </Router>
        </Provider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
