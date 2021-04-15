import React from "react";
import { render } from "react-dom";
import ComponentCounter from "./ComponentCounter";
import HooksCounter from "./HooksCounter";
import ReduxCounter from "./ReduxCounter";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./styles.css";

const initialState = {
  count: 0
};

// returns the redux store object
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

// createStore needs reducer function
const store = createStore(reducer);

// the only way to change the state inside the store is
// to dispatch an action on it
// dispatch takes an object that is the action object
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

const App = () => (
  <Provider store={store}>
    <ComponentCounter />
    <br />
    <br />
    <hr />
    <br />
    <HooksCounter />
    <br />
    <br />
    <hr />
    <br />
    <ReduxCounter count={42} />
  </Provider>
);

render(<App />, document.getElementById("root"));
