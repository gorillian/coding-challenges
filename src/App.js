import "./styles/App.scss";
import BrainDeadHeader from "./BrainDeadHeader";
import RedLightGreenLight from "./RedLightGreenLight";
import CountContextProvider from "./CountContextProvider";
import CountDisplay from "./CountDisplay";

function App() {
  return (
    <div className="App">
      <h3>Coding Challenges</h3>
      <RedLightGreenLight />
      <BrainDeadHeader />
      <CountContextProvider>
        <CountDisplay />
      </CountContextProvider>
    </div>
  );
}

export default App;
