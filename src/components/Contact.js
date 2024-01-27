import { CONTACT_US_URL } from "../utils/constants"
import Hero from "./Hero"

export default function Contact(){
    return(
        <div>
            
        <div className="contact-us m-4 mt-28 flex flex-wrap justify-center items-center">
            <div className="Formal text-center w-40 mx-auto">
                <img src={CONTACT_US_URL}/>
                <h2>Get in touch..</h2>
                <p>We will be happy to hear your response.</p>
            </div>
            <div className="Form text-white sm:w-80 flex m-8 rounded-xl bg-gradient-to-r from-red-600 to-blue-600 flex-col p-5 w-72 mx-auto">
                <div><h1>Contact Us</h1></div>
                <form className="ContactForm flex-col flex">
                    <label for="email">Email:</label>
                    <input className="text-black p-1 rounded-lg bg-slate-50 shadow-sm shadow-slate-400 my-2 " id="email" name="email" type='email'/>
                    <label for="Name">Name:</label>
                    <input className="text-black p-1 rounded-lg bg-slate-50 shadow-sm shadow-slate-400 my-2" id= "Name" name="Name" type="text"/>
                    <label for="Message">Message:</label>
                    <textarea className="text-black p-1 rounded-lg bg-slate-50 shadow-sm shadow-slate-400 h-14 my-2 text-sm" id= "Message" name="Messgae" type="text"/>
                    <button className="rounded-xl text-black bg-white w-fit p-1 mx-auto" type="submit">Submit</button>
                </form>
            </div>
        </div>
        </div>
    )
}