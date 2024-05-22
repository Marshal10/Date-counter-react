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
