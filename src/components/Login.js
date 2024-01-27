import React from 'react'
import Hero from './Hero'
import { CONSTRUCTION_URL } from '../utils/constants'

const Login = () => {
  return (
    <div>
       <Hero/>
      <div class="container-construction flex flex-col m-4 items-center px-3 justify-between">
        <div>

        <h1 className="font-bold text-center text-xl">Page Under Construction!!</h1>
        <p>We promise...we are seriously working on it. Thanks for your curiosity!</p>
        </div>
        <img class="construction-image w-96" src={CONSTRUCTION_URL} alt="Under Construction"/>
    </div>
    </div>
  )
}

export default Login
