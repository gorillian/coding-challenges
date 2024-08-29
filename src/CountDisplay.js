import { useCountVal } from "./CountContextProvider";

export default function CountDisplay() {
  const { count, handleCountClick } = useCountVal();

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleCountClick}>add</button>
    </div>
  );
}
