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
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>💼🧵</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read children prop</p>
        <p>🫡🙇</p>
      </StepMessage>
      <StepMessage step={3}>
        <p>Pass in content</p>
        <p>🧵🫡</p>
      </StepMessage>
    </div>
  );
}

function Steps() {
  // const step = 2;
  const [step, setStep] = useState(1);
  // below is wrong
  // const [test, setTest] = useState({ name: "Jonas" });

  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    //old
    // if (step > 1) setStep(step - 1);
    //updated/lastest
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    // the below is wrong
    // step = step + 1;
    //Good practise
    if (step < 3) {
      setStep((s) => s + 1);
    }
    //Bad practise
    // test.name = "Tega";
    //Good practice
    // setTest({ name: "Fred" });
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          {/* eg of child props */}
          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                textColor="#333"
                bgColor="#e7e7e7"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Kearn how
              </Button>
            </div>
          </StepMessage>
          {/* eg of child props */}

          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              Previous <span>👈</span>
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h3> Step {step}: </h3>
      {children}
      {/* {messages[step - 1]} */}
      {/* {test.name} */}
    </p>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
      {/* <span>{emoji}</span> {text} */}
    </button>
  );
}
