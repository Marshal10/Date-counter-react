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
  return (
    <>
      <div className="step-section">
        {/* <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button> */}
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep((s) => (s = +e.target.value))}
        ></input>
        <span>{step}</span>
      </div>
      <CountSection stepCounter={step} />
    </>
  );
}

function CountSection({ stepCounter }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="count-section">
        <button onClick={() => setCount((c) => c - stepCounter)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + stepCounter)}>+</button>
      </div>
      <DateSection count={count} />
    </>
  );
}

function DateSection({ count }) {
  const today = new Date();
  today.setDate(today.getDate() + count);
  return (
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
  );
}
