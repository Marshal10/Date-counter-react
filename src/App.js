export default function App() {
  return (
    <div className="wrapper">
      <StepSection />
    </div>
  );
}

function StepSection() {
  return (
    <div className="step-section">
      <button>-</button>
      <span>Step: 5</span>
      <button>+</button>
    </div>
  );
}
