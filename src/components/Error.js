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
       <div class="error-container">
        <img src={ERROR_URL}/>
        <h1>{err.status}:{err.statusText}</h1>
        <p>Oops! The page you're looking for might be unavailable or doesn't exist.</p>
        <a className="errorLink" href="/">Go to Home Page</a>
      </div>
    </div>
  )
}

export default Error
