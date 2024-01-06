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
        </div><a href="https://play.google.com/">
        <img className="download-img" alt="Download from Play Store/App Store" src={DOWNLOAD_LOGO} 
        onClick={(e)=>{
          var result = confirm("You are about to leave our website and continue to some other website.Are you sure?")
          if(!result){
            e.preventDefault();
          }
        }

        }/></a>
      </div>
      <div className="second">
        <div className="aside">
          <img className="gif" alt="Location icon" src={LOCATION_LOGO} />
        </div>
        <div className="mainfooter">
          <h2>Address:</h2>
          <p>
            Patia,<br/>Bhubaneswar,
            <br />Odisha (751024)<br />
            India
          </p>
          
        </div>
        <div className="connect">
          <h1>Connect with us on...</h1>
          <img className="icon" id="insta" alt="Instagram" src={INSTA_LOGO} />
          <img className="icon" id="facebook" alt="GitHub" src={FACEBOOK_LOGO} />
          <img className="icon" id="twitter" alt="Twitter(X)" src={TWITTER_LOGO} />
          <img className="icon" id="linkedin" alt="Linked IN" src={LINKEDIN_LOGO} />
        </div>
      </div>
      <div className="copyright">
      <h3>©2024 Shivam.All rights reserved.</h3>
      </div>
    </div>
  );
}
