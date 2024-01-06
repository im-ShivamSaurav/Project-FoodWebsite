import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const err = useRouteError();
    // console.log(err);
  return (
    <div>
      <h1>Ooopppsss!!!!</h1>
      <h2>Umm...🤔We aren't sure.... what are you looking for!</h2>
      <h3>{err.status}:{err.statusText}</h3>

    </div>
  )
}

export default Error
