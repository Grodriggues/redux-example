import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { inc, dec } from "./actions/index";

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button
        onClick={() => {
          dispatch(inc());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(dec());
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
