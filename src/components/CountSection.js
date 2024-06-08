import { useState } from "react";
import DateSection from "./DateSection";

export default function CountSection({ stepCounter, sf }) {
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
