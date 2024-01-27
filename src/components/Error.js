import React from 'react'
import { useRouteError } from 'react-router-dom'
import { ERROR_URL } from '../utils/constants';
const Error = () => {
    const err = useRouteError();
    // console.log(err);
  return (
    <div clasName= "ErrorMain">
      {/* <h1>Ooopppsss!!!!</h1>
      <h2>Umm...🤔We aren't sure.... what are you looking for!</h2>
      <h3>{err.status}:{err.statusText}</h3> */}
       <div class="error-container w-80 mt-5 mx-auto">
        <img src={ERROR_URL}/>
        <h1 className="font-bold text-red-700 text-center text-xl">{err.status} : {err.statusText}</h1>
        <p className="m-7">Oops! The page you're looking for might be unavailable or doesn't exist.</p>
        <p  className="errorLink bg-red-700 text-white font-bold p-3 m-4 rounded-lg text-center" ><a href="/">Go to Home Page</a></p>
      </div>
    </div>
  )
}

export default Error
