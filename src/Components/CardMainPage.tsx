import { AiFillStar } from "react-icons/Ai";
import "./CardMainPage.css";

interface CardMainPageProps {
  setPageChange: (value: boolean) => void;
  setRateNum: (value: string) => void;
}

function CardMainPage({
  setPageChange,
  setRateNum,
}: CardMainPageProps) {
  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>):void {
    e.preventDefault();
    const allNums = document.querySelectorAll(".numCont");

    allNums.forEach((itme) => {
      itme.classList.remove("numContchange");  
    });
    e.currentTarget.classList.add("numContchange");
    setRateNum(e.currentTarget.textContent as string);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>):void {
    e.preventDefault();
    setPageChange(false);
  }

  return (
    <div className="container">
      <div className="iconCont">
        <AiFillStar className="StarIcon" />
      </div>
      <div className="headLettercont">
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="numDiv">
            <div onClick={handleClick} className="numCont">
              1
            </div>
            <div onClick={handleClick} className="numCont">
              2
            </div>
            <div onClick={handleClick} className="numCont">
              3
            </div>
            <div onClick={handleClick} className="numCont">
              4
            </div>
            <div onClick={handleClick} className="numCont">
              5
            </div>
          </div>
          <button type="submit" className="submitBtn">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CardMainPage;
