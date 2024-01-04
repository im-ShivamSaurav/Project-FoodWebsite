import {
  DOWNLOAD_LOGO,
  FACEBOOK_LOGO,
  INSTA_LOGO,
  LINKEDIN_LOGO,
  LOCATION_LOGO,
  TWITTER_LOGO,
} from "../utils/constants";

export default function Footer() {
  return (
    <div className="footer">
      <div className="download">
        <div>
          <h1>
            For better experience,
            <br /> download our App now
          </h1>
        </div>
        <img className="download-img" src={DOWNLOAD_LOGO} />
      </div>
      <div className="second">
        <div className="connect">
          <h1>Connect with us on...</h1>
          <img className="icon" id="insta" src={INSTA_LOGO} />
          <img className="icon" id="facebook" src={FACEBOOK_LOGO} />
          <img className="icon" id="twitter" src={TWITTER_LOGO} />
          <img className="icon" id="linkedin" src={LINKEDIN_LOGO} />
        </div>
        <div className="aside">
          <img className="gif" src={LOCATION_LOGO} />
        </div>
        <div className="mainfooter">
          <h2>Address:</h2>
          <p>
            Patia,Bhubaneswar
            <br />
            India
          </p>
          <br/><br/><br/>
          <h3>©2024 Shivam.All rights reserved.</h3>
        </div>
      </div>
    </div>
  );
}
