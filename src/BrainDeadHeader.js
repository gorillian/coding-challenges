import { Link } from "react-router-dom";

export default function BrainDeadHeader() {
  return (
    <div className="header-container">
      <div className="left-header">
        <div className="options-wrapper">
          <div className="option">MENU</div>
          <div className="option">SHOP ALL</div>
          <div className="option">SPRING/SUMMER 24</div>
        </div>
        <div className="options-wrapper">
          <div className="option">SEARCH</div>
        </div>
      </div>
      <div className="right-header">
        <div className="option">LOGIN</div>
        <div className="option">REGISTER</div>
        <div className="option">CART</div>
      </div>
    </div>
  );
}
