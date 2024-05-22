import { useState } from "react";

export default function App() {
  return (
    <div className="wrapper">
      <StepSection />
      <CountSection />
      <DateSection />
    </div>
  );
}

function StepSection() {
  const [step, setStep] = useState(0);
  return (
    <div className="step-section">
      <button onClick={() => setStep(step - 1)}>-</button>
      <span>Step: {step}</span>
      <button onClick={() => setStep(step + 1)}>+</button>
    </div>
  );
}

function CountSection() {
  const [count, setCount] = useState(0);
  return (
    <div className="count-section">
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>Count: {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

function DateSection() {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const today = new Date();
  const year = today.getFullYear();
  const month = monthNames[today.getMonth()];
  const day = dayNames[today.getDay()];
  return (
    <p>
      Today is {day} {month} {today.getDay()} {year}
    </p>
  );
}
