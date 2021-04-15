import React from "react";
import { connect } from "react-redux";

// This component connects to the redux store
// the redux's connect passes in the dispatch function
// in the props
function ReduxCounter(props) {
  // arrow function
  const decrement = () => {
    props.dispatch({ type: "DECREMENT" });
  };

  // normal function
  function increment() {
    props.dispatch({ type: "INCREMENT" });
  }

  return (
    <section>
      <h1>Counter using function with react hooks and using redux</h1>
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={decrement}>-</button>
          <span>{props.count}</span>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </section>
  );
}

/*  arrow function mapStateToProps
const mapStateToProps = (state) => ({
  count: state.count
})
*/
function mapStateToProps({ count } /*, props*/) {
  // const { count } = state;
  return {
    count
  };
}
export default connect(mapStateToProps)(ReduxCounter);
