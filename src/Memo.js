import { useMemo, useState } from "react";

function Memo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 2);
  };
  const isEven = useMemo(() => {
    console.warn("....");
    let i = 0;
    while (i < 200000000) i++;

    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <button onClick={incrementOne}>Counter One - {counterOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={incrementTwo}>Counter Two - {counterTwo}</button>
    </div>
  );
}

export default Memo;
