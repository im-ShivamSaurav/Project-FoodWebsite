import React from 'react'
import offlinepic from "../../Resources/offline.svg"

const Offline = () => {
  return (
    <div>
      <div className = "Offline-main m-4 mt-44 text-lg">
        <div className="offline-image text-center flex justify-center m-11"></div>
        <div>
            <h1 className="text-red-700 font-bold text-3xl sm:text-8xl flex items-center justify-center text-center m-11">Ooops!!!</h1>
            <ul className=' flex flex-col justify-center items-center'>
            <li className="text-2xl">🔴Looks Like you are not connected to the Internet</li>
            <li className="text-2xl">🔴Check your internet connection and try refreshing the page !!</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Offline;
