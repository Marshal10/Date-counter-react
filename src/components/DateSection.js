import ResetButton from "./ResetButton";

export default function DateSection({ count, cf, sf, step }) {
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
