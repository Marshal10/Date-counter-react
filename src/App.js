import { useState } from "react";

export default function App() {
  return (
    <div className="wrapper">
      <MainSection />
    </div>
  );
}

function MainSection() {
  const [step, setStep] = useState(1);
  function stepCounterChange(e) {
    setStep((s) => (s = +e.target.value));
  }
  return (
    <>
      <div className="step-section">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={stepCounterChange}
        ></input>
        <span>{step}</span>
      </div>
      <CountSection stepCounter={step} sf={setStep} />
    </>
  );
}

function CountSection({ stepCounter, sf }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="count-section">
        <button onClick={() => setCount((c) => c - stepCounter)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => {
            setCount((c) => (c = +e.target.value));
          }}
        ></input>
        <button onClick={() => setCount((c) => c + stepCounter)}>+</button>
      </div>
      <DateSection step={stepCounter} count={count} sf={sf} cf={setCount} />
    </>
  );
}

function DateSection({ count, cf, sf, step }) {
  const today = new Date();
  today.setDate(today.getDate() + count);
  return (
    <>
      <span className="output">
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} ${Math.abs(count) === 1 ? "day" : "days"} from today is `
          : `${Math.abs(count)} ${
              Math.abs(count) === 1 ? "day" : "days"
            } ago was `}
        {today.toDateString()}
      </span>
      {count !== 0 || step !== 1 ? <ResetButton cf={cf} sf={sf} /> : null}
    </>
  );
}

function ResetButton({ cf, sf }) {
  function handleReset() {
    cf((c) => (c = 0));
    sf((s) => (s = 1));
  }
  return (
    <div>
      <button className="resetBtn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
