import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="navbar">
      <img src={LOGO_URL} />
      <div className="srch-cnt">
        <div className="srch-box">
          <input
            id="search"
            type="search"
            placeholder="Type here to search..."
          ></input>
          <button className="srch-button">🔍</button>
        </div>
      </div>
      <div className="navbar-items">
        <ul>
          <li>Home</li>
          <li>
            <a href="#insta">Contact</a>
          </li>
          <li>Profile</li>
          <li>🛒</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
