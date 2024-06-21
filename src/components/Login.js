import React from 'react'
import Hero from './Hero'
import { CONSTRUCTION_URL } from '../utils/constants'
import mylogo from  "../../Resources/logo.png";

const Login = () => {
  return (
    <div className="flex items-center justify-center md:flex-nowrap h-[100vh] translate-y-[-7%] ">
      <div className='w-1/2 mx-auto mt-24 md:w-full'>
        <img className="mx-auto " src={mylogo} />
      </div>
      <form className='w-1/2 md:w-full'>
        <div className='mt-[100px] flex flex-col bg-slate-200 w-96 p-4 mx-auto rounded-lg'>
          <label for="email-log" className='m-2'>Email:</label>
          <input id="email-log" type="email" className='m-2 h-11 outline-none bg-slate-100 p-2 rounded-md'></input>
          <label for="pwd-log" className='m-2'>Password:</label>
          <input id="pwd-log" type="password" className='m-2 h-11 outline-none bg-slate-100 p-2 rounded-md'></input>
          <button className='p-1 bg-[#09C090] w-24 h-11 m-auto mt-5 rounded-xl'>LogIn</button>
          <p className='text-center m-4'>Don't have an account! <a>Sign up</a></p>
        </div>``
      </form>
    </div>
    
  )
}

export default Login
{/* <div>
       <Hero/>
      <div class="container-construction flex flex-col m-4 items-center px-3 justify-between">
        <div>

        <h1 className="font-bold text-center text-xl">Page Under Construction!!</h1>
        <p>We promise...we are seriously working on it. Thanks for your curiosity!</p>
        </div>
        <img class="construction-image w-96" src={CONSTRUCTION_URL} alt="Under Construction"/>
    </div>
    </div> */}