import { useState } from "react";
import mylogo from  "../../Resources/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [LogValue,setLogValue] =useState("Login");
  const [flag, setFlag] = useState(false);
  const onlineStatus = useOnlineStatus(); 
  var onlineValue="green";
  onlineStatus===true?(onlineValue="green"):(onlineValue="red")
  const handleClick=()=>{
    if(flag===true){
      setFlag(false);
    }
    else{
      setFlag(true);
    }
  }
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-lg shadow-slate-300 navbar flex  justify-between px-4 items-center flex-wrap sm:flex-nowrap">
      <Link to="/">
        <img className="w-16 sm:w-28 my-1 -ml-0.5" src={mylogo}  onClick={()=>{
        window.scrollTo(0,0);
      }} />
      </Link>
      <div className="navbar-items flex items-center">
      <p className="block m-3 text-lg font-medium bg-gradient-to-r hover:cursor-not-allowed select-none transition-all duration-300" style={{color:onlineValue}}>{onlineStatus===true?"Online":"Offline"}</p>
      <div className="md:hidden font-bold text-3xl " onClick={handleClick}>{flag===false?<RxHamburgerMenu />:<RxCross2 />}</div>
        <ul className="hidden sm:flex-row my-3 font-medium flex-wrap">
          <li className="mx-1 my-3 sm:m-3 text-xs sm:text-lg"><Link to="/" onClick={()=>{window.scrollTo(0,0);}}>
            Home
            </Link>
            </li>
          <li className="mx-1 my-3 sm:m-3 text-xs sm:text-lg">
            <Link to="/contact" onClick={()=>{window.scrollTo(0,0)}}>Contact</Link>
          </li >
          <li className="mx-1 my-3 sm:m-3 text-xs sm:text-lg" onClick={()=>{window.scrollTo(0,0);}}><Link to="/about">About</Link></li>
          <li className="mx-1 my-3 sm:m-3 text-xs sm:text-lg" onClick={()=>{window.scrollTo(0,0);}}><Link to="/cart">🛒</Link></li>
          <Link to="/login">
          <button onClick={()=>{window.scrollTo(0,0);}}
            className="log-btn hidden sm:block m-3 text-lg bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white px-2 rounded-md "
            >{LogValue}</button></Link>
        </ul>
      </div>
      
        <div className={`sm:hidden absolute z-50 top-14 h-[100vh] w-[200px] bg-black text-white border-1 backdrop-blur-sm opacity-95 transition-all duration-300 transform ease-in ${flag===true?`right-0`:`-right-60`}`}>
        <ul className=" font-bold flex-wrap justify-center items-center h-auto mt-[50%] text-center">
          <li className="mx-6 my-3 sm:m-3 text-lg sm:text-lg border-b-2 border-white p-4 " onClick={handleClick}><Link to="/" onClick={()=>{window.scrollTo(0,0);}}>
            Home
            </Link>
            </li>
          <li className="mx-6 my-3 sm:m-3 text-lg sm:text-lg border-b-2 border-white p-4" onClick={handleClick}>
            <Link to="/contact" onClick={()=>{window.scrollTo(0,0)}}>Contact</Link>
          </li >
          <li className="mx-6 my-3 sm:m-3 text-lg sm:text-lg border-b-2 border-white p-4" onClick={()=>{window.scrollTo(0,0);handleClick()}}><Link to="/about">About</Link></li>
          <li className="mx-6 my-3 sm:m-3 text-lg sm:text-lg border-b-2 border-white p-4" onClick={()=>{window.scrollTo(0,0);handleClick()}}><Link to="/cart">My Cart</Link></li>
        </ul>
        
      </div>
    </div>

  );
};

export default Header;
