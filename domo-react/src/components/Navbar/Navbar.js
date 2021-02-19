import "../../styles/Navbar.css";
import domoLogo from "../../images/domo-svg.svg";
import { Options } from "./Options";
import { BiUserCircle } from "react-icons/bi";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={domoLogo} alt="logo" className="nav-left" />
      <Options />
      <div className="nav-right">
        <BiUserCircle className="nav-right-item nav-right-icon" />
        <div className="nav-right-item default-mouse">Pricing</div>
        <button className="nav-right-button nav-right-item">TRY FREE</button>
      </div>
    </nav>
  );
};
