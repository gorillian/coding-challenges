import { useState, createContext, useContext } from "react";

const CountContext = createContext();

export default function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  const handleCountClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const countValues = { count, handleCountClick };

  return (
    <CountContext.Provider value={countValues}>
      {children}
    </CountContext.Provider>
  );
}

export const useCountVal = () => {
  return useContext(CountContext);
};
