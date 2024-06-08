export default function ResetButton({ cf, sf }) {
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
