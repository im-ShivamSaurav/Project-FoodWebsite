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
    <div className="footer bg-[#F2F2F2]">
      <div className="download flex flex-wrap justify-around pt-4 m-6 text-2xl font-bold items-center">
        <div>
          <h1>
            For better experience,
            <br /> download our App now
          </h1>
        </div><a href="https://play.google.com/">
        <img className="download-img w-96" alt="Download from Play Store/App Store" src={DOWNLOAD_LOGO} 
        onClick={(e)=>{
          var result = confirm("You are about to leave our website and continue to some other website.Are you sure?")
          if(!result){
            e.preventDefault();
          }
        }

        }/></a>
      </div>
      <div className="second flex flex-wrap justify-around mt-11 items-center flex-row-reverse">
        {/* <div className="aside">
        <i className="fa-solid fa-truck-fast text-8xl"></i>
        </div> */}
        <div className="hidden sm:block mainfooter font-bold m-6 mr-0 bg-gray-700 text-white p-4 py-7  shadow-lg shadow-gray-300 rounded-xl">
          <h2>Address:</h2>
          <p>
            Patia, Bhubaneswar
            <br />Odisha (751024)<br />
            India
          </p>
          
        </div>
        <div className="connect my-11">
          <h1 className="font-semibold text-2xl m-6 mr-0">Connect with us on...</h1>
          <div className="flex my-6">
          <i class="fa-brands fa-instagram m-3 scale-125 bg-black text-white p-3 rounded-full text-2xl hover:cursor-pointer"></i>
          <i class="fa-brands fa-twitter m-3 scale-125 bg-black text-white p-3 rounded-full text-2xl hover:cursor-pointer"></i>
          <i class="fa-brands fa-linkedin m-3 scale-125 bg-black text-white p-3 rounded-full text-2xl hover:cursor-pointer"></i>
          {/* <i class="fa-brands fa-youtube m-3 scale-125 bg-black text-white p-3 rounded-full text-3xl"></i> */}
          <i class="fa-brands fa-github m-3 scale-125 bg-black text-white p-3 rounded-full text-2xl hover:cursor-pointer"></i>
          </div>
        </div>
      </div>
      <div className="copyright text-center bg-gray-700 text-white">
      <h3>©2024 Shivam.All rights reserved.</h3>
      </div>
    </div>
  );
}
