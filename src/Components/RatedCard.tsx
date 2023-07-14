import "./RatedCard.css";
import mobile1 from "../Img/mobile1.png";

interface RatedCardProps {
  rateNum: string;
}

function RatedCard({rateNum}:RatedCardProps) {
  return (
    <div className="ratedContainer">
      <img className="mobileImg" src={mobile1} alt="mobile" />
      <div className="resultText">You selected {rateNum} out of 5</div>
      <h1 className="headerMain">Thank you!</h1>
      <p className="appreciateLetter">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default RatedCard;
