import React from 'react'
import offlinepic from "../../Resources/offline.svg"

const Offline = () => {
  return (
    <div>
      <div className = "Offline-main">
        <div className="offline-image"></div>
        <div>
            <h1>Ooops !!!</h1>
            <h4> Looks Like you are not connected to the Internet</h4>
            <p>Check your internet connection and try refreshing the page !!</p>
        </div>
      </div>
    </div>
  )
}

export default Offline;
