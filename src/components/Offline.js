import React from 'react'
import offlinepic from "../../Resources/offline.svg"

const Offline = () => {
  return (
    <div>
      <div className = "Offline-main m-4 mt-44 text-lg">
        <div className="offline-image text-center flex justify-center"></div>
        <div>
            <h1 className="text-red-700 font-bold text-8xl m-28 text-center">Ooops !!!</h1>
            <h4 className="text-center text-2xl">Looks Like you are not connected to the Internet</h4>
            <p className="text-center text-2xl">Check your internet connection and try refreshing the page !!</p>
        </div>
      </div>
    </div>
  )
}

export default Offline;
