import { useState } from "react";

function getDateWithOffset(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toDateString();
}

export default function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function Increment() {
    return setStep((s) => s + 1);
  }
  function Decrement() {
    return setStep((s) => s - 1);
  }
  //   function IncrementCount() {
  //     let currentStep = 1;
  //     if (step != 0) {
  //       currentStep = step;
  //     }
  //     return setCount((s) => s + currentStep);
  //   }
  //   function DecrementCount() {
  //     let currentStep = 1;
  //     if (step != 0) {
  //       currentStep = step;
  //     }
  //     return setCount((s) => s - currentStep);
  //   }
  //better approach.
  function IncrementCount() {
    setCount((c) => c + step);
  }

  function DecrementCount() {
    setCount((c) => c - step);
  }

  //   let tega = step == 1 ? `${1}` : `${count}`;
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button onClick={Decrement}>-</button>
          <p>Step: {step}</p>
          <button onClick={Increment}>+</button>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button onClick={DecrementCount}>-</button>
          <p>Count: {count}</p>
          <button onClick={IncrementCount}>+</button>
        </div>

        <div>
          <h3>
            {count === 0
              ? "Today is "
              : count > 0
                ? `${count} days from today is `
                : `${Math.abs(count)} days ago was`}
            {getDateWithOffset(count)}
          </h3>
        </div>
      </div>
    </div>
  );
}
