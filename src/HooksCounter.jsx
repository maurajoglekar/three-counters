import React, { useState } from "react";

//Counter component using function with react hooks
function BetterCounter() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  function increment() {
    setCount(count + 1);
  }

  return (
    <section>
      <h1>Counter using function with react hooks</h1>
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </section>
  );
}

export default BetterCounter;
