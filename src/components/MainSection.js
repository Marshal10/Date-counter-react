import { useState } from "react";
import CountSection from "./CountSection";

export default function MainSection() {
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
