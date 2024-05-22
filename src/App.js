export default function App() {
  return (
    <div className="wrapper">
      <StepSection />
      <CountSection />
    </div>
  );
}

function StepSection() {
  return (
    <div className="step-section">
      <button>-</button>
      <span>Step: 1</span>
      <button>+</button>
    </div>
  );
}

function CountSection() {
  return (
    <div className="step-section">
      <button>-</button>
      <span>Count: 1</span>
      <button>+</button>
    </div>
  );
}
