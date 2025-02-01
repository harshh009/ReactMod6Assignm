import { useState } from "react";
import { findConfigFile } from "typescript";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div className="Counter">
      <div className="step-button">
        <button onClick={() => setStep((s) => s + 1)}>+</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
      </div>

      <div className="count-button">
        <button onClick={() => setCount((c) => c + step)}>+</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c - step)}>-</button>
      </div>

      <p>
        <span>
          Today is
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days ahead`
            : `${Math.abs(count)} day${Math.abs(count) > 1 ? "s" : ""} past`}
        </span>
        <span> Today is {date.toDateString()}</span>
      </p>
    </div>
  );
}
