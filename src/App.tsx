import CardMainPage from "./Components/CardMainPage";
import "./App.css";
import { useState } from "react";
import RatedCard from "./Components/RatedCard";

function App() {
  const [pageChange, setPageChange] = useState<boolean>(true);
  const [rateNum, setRateNum] = useState<string>("");

  return (
    <div className="mainContainer">
      {pageChange ? (
        <CardMainPage setRateNum={setRateNum} setPageChange={setPageChange} />
      ) : (
        <RatedCard rateNum={rateNum} />
      )}
    </div>
  );
}

export default App;
