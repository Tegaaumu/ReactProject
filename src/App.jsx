// we place message out sode App function so that its will not be rendered everytime the App function is called.

import { useState } from "react";

// note this two thing are different.
//onMouseEnter={alert("test")}
//onMouseEnter={() => alert("test")}
//useState(1) is an hook. anything that start with `use` is a hook. it can only be called at top(first) imediately after the function.

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // const step = 2;
  const [step, setStep] = useState(1);
  // below is wrong
  const [test, setTest] = useState({ name: "Jonas" });

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    // the below is wrong
    // step = step + 1;
    //Good practise
    if (step < 3) setStep(step + 1);
    //Bad practise
    // test.name = "Tega";
    //Good practice
    setTest({ name: "Fred" });
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
        {test.name}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
